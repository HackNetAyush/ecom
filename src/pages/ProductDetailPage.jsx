import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHeart, 
  FiShoppingCart, 
  FiStar, 
  FiTruck, 
  FiShield, 
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
  FiMinus,
  FiPlus
} from 'react-icons/fi';
import { products, reviews } from '../data/mockData';
import ProductCard from '../components/Product/ProductCard';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [loading, setLoading] = useState(true);

  const { addToCart, addToWishlist, wishlist } = useStore();

  useEffect(() => {
    // Simulate API call
    const foundProduct = products.find(p => p.slug === slug);
    setTimeout(() => {
      setProduct(foundProduct);
      setLoading(false);
      if (foundProduct?.sizes?.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
      if (foundProduct?.colors?.length > 0) {
        setSelectedColor(foundProduct.colors[0]);
      }
    }, 500);
  }, [slug]);

  const isInWishlist = product && wishlist.some(item => item.id === product.id);
  const relatedProducts = products.filter(p => 
    p.category === product?.category && p.id !== product?.id
  ).slice(0, 4);

  const productReviews = reviews.filter(r => r.productId === product?.id);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (product.colors && !selectedColor) {
      toast.error('Please select a color');
      return;
    }

    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
      quantity
    };

    addToCart(cartItem);
    toast.success('Added to cart!');
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product);
      toast.success('Added to wishlist!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Skeleton */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>
            {/* Content Skeleton */}
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-12 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-8 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary-600">Products</Link>
          <span>/</span>
          <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-primary-600">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-primary-500' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand & Name */}
            <div>
              <p className="text-primary-600 font-medium mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="text-green-600 font-medium">
                  Save {product.discount}%
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedColor === color
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 transition-colors"
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className={`p-3 border rounded-lg transition-all ${
                    isInWishlist
                      ? 'border-red-500 bg-red-50 text-red-500'
                      : 'border-gray-300 hover:border-red-300 hover:text-red-500'
                  }`}
                >
                  <FiHeart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <FiTruck className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-medium text-sm">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiRefreshCw className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-medium text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiShield className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-medium text-sm">Secure Payment</p>
                  <p className="text-xs text-gray-500">SSL encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'features', label: 'Features' },
                { id: 'reviews', label: `Reviews (${productReviews.length})` },
                { id: 'shipping', label: 'Shipping & Returns' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This premium product is crafted with attention to detail and quality materials. 
                  Perfect for those who appreciate fine craftsmanship and modern design.
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="font-semibold text-lg mb-6">Customer Reviews</h3>
                {productReviews.length > 0 ? (
                  <div className="space-y-6">
                    {productReviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <FiStar
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Shipping Information</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Free standard shipping on orders over $50</li>
                    <li>• Express shipping available for $9.99</li>
                    <li>• International shipping available</li>
                    <li>• Orders processed within 1-2 business days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Returns & Exchanges</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 30-day return policy</li>
                    <li>• Items must be in original condition</li>
                    <li>• Free return shipping for defective items</li>
                    <li>• Exchanges available for different sizes/colors</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;