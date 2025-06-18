import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiX, FiShare2 } from 'react-icons/fi';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
    toast.success('Removed from wishlist');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Wishlist - ElegantShop',
        text: 'Check out my wishlist on ElegantShop',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Wishlist link copied to clipboard!');
    }
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <FiHeart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">
              Save items you love to your wishlist and never lose track of them.
            </p>
            <Link to="/products" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
            <p className="text-gray-600">{wishlist.length} items saved</p>
          </div>
          <button
            onClick={handleShare}
            className="btn-secondary flex items-center space-x-2"
          >
            <FiShare2 className="w-4 h-4" />
            <span>Share Wishlist</span>
          </button>
        </motion.div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Remove Button */}
              <button
                onClick={() => handleRemoveFromWishlist(product.id)}
                className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-all duration-200"
              >
                <FiX className="w-4 h-4 text-gray-600 hover:text-red-500" />
              </button>

              {/* Product Image */}
              <Link to={`/product/${product.slug}`}>
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  {product.discount && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{product.discount}%
                      </span>
                    </div>
                  )}
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                <Link
                  to={`/product/${product.slug}`}
                  className="font-medium text-gray-900 hover:text-primary-600 transition-colors line-clamp-2 mb-2"
                >
                  {product.name}
                </Link>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
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
                <div className="mb-4">
                  {product.inStock ? (
                    <span className="text-xs text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-xs text-red-600 font-medium">Out of Stock</span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm"
                >
                  <FiShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continue Shopping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/products" className="btn-secondary">
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WishlistPage;