import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';
import ProductCard from '../components/Product/ProductCard';
import { products, categories } from '../data/mockData';

const CategoryPage = () => {
  const { slug } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const category = categories.find(cat => cat.slug === slug);
  const categoryProducts = products.filter(product => 
    product.category.toLowerCase() === category?.name.toLowerCase()
  );

  const brands = useMemo(() => {
    return [...new Set(categoryProducts.map(product => product.brand))];
  }, [categoryProducts]);

  const filteredProducts = useMemo(() => {
    let filtered = categoryProducts.filter(product => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }
      if (product.rating < minRating) {
        return false;
      }
      return true;
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [categoryProducts, selectedBrands, priceRange, minRating, sortBy]);

  if (!category) {
    return (
      <div className="min-h-screen pt-8 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16">
      {/* Category Hero */}
      <div className="relative h-64 mb-12">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl">Discover our {category.name.toLowerCase()} collection</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Subcategories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map(subcategory => (
              <button
                key={subcategory}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:border-primary-500 hover:text-primary-600 transition-colors"
              >
                {subcategory}
              </button>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex justify-between items-center mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">
              Showing {filteredProducts.length} of {categoryProducts.length} products
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>

            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-gray-500'}`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-gray-500'}`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block w-64">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(selectedBrands.filter(b => b !== brand));
                          }
                        }}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="ml-2 text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>$0</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={minRating === rating}
                        onChange={(e) => setMinRating(parseInt(e.target.value))}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="ml-2 text-sm">{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;