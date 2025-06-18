import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiGrid, FiList, FiChevronDown } from 'react-icons/fi';
import ProductCard from '../components/Product/ProductCard';
import { products, categories } from '../data/mockData';
import useStore from '../store/useStore';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);

  const { searchQuery } = useStore();

  // Get unique brands
  const brands = useMemo(() => {
    return [...new Set(products.map(product => product.brand))];
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Rating filter
      if (product.rating < minRating) {
        return false;
      }

      // Stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    });

    // Sort products
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
      case 'popular':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrands, priceRange, minRating, inStockOnly, sortBy]);

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory('');
    setSelectedBrands([]);
    setPriceRange([0, 1000]);
    setMinRating(0);
    setInStockOnly(false);
  };

  const activeFiltersCount = [
    selectedCategory,
    ...selectedBrands,
    priceRange[0] > 0 || priceRange[1] < 1000,
    minRating > 0,
    inStockOnly
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
          </h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Filters and Sort Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FiFilter className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={false}
            animate={{ 
              width: showFilters ? 300 : 0,
              opacity: showFilters ? 1 : 0
            }}
            className="hidden lg:block overflow-hidden"
          >
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ''}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="ml-2 text-sm">All Categories</span>
                  </label>
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.name}
                        checked={selectedCategory === category.name}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="ml-2 text-sm">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Brand</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="ml-2 text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Minimum Rating</h3>
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
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={0}
                      checked={minRating === 0}
                      onChange={(e) => setMinRating(parseInt(e.target.value))}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="ml-2 text-sm">All Ratings</span>
                  </label>
                </div>
              </div>

              {/* Stock Filter */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 text-primary-600"
                  />
                  <span className="ml-2 text-sm">In Stock Only</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearAllFilters}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {showFilters && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              {/* Mobile filter content would go here - same as desktop filters */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;