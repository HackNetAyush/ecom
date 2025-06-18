import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiEye, FiStar } from 'react-icons/fi';
import useStore from '../../store/useStore';
import toast from 'react-hot-toast';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart, addToWishlist, wishlist } = useStore();

  const isInWishlist = wishlist.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isInWishlist) {
      addToWishlist(product);
      toast.success('Added to wishlist!');
    }
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative"
    >
      <Link to={`/product/${product.slug}`}>
        <div
          className="card overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            {/* Discount Badge */}
            {discount > 0 && (
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{discount}%
                </span>
              </div>
            )}

            {/* Wishlist Button */}
            <button
              onClick={handleAddToWishlist}
              className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isInWishlist 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
              }`}
            >
              <FiHeart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
            </button>

            {/* Product Images */}
            <div className="relative w-full h-full">
              <img
                src={product.images[0]}
                alt={product.name}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
                } ${imageLoaded ? 'blur-0' : 'blur-sm'}`}
                onLoad={() => setImageLoaded(true)}
              />
              {product.images[1] && (
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}
            </div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 20 
              }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-4 right-4 flex space-x-2"
            >
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary-800 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <FiShoppingCart className="w-4 h-4" />
                <span className="text-sm">Add to Cart</span>
              </button>
              <button className="bg-white hover:bg-gray-50 text-primary-800 p-2 rounded-lg transition-all duration-200">
                <FiEye className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Brand */}
            <p className="text-sm text-gray-500 mb-1">{product.brand}</p>

            {/* Product Name */}
            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">
                ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="mt-2">
              {product.inStock ? (
                <span className="text-xs text-green-600 font-medium">In Stock</span>
              ) : (
                <span className="text-xs text-red-600 font-medium">Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;