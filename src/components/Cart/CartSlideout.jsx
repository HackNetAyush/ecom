import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import useStore from '../../store/useStore';

const CartSlideout = () => {
  const {
    isCartOpen,
    cart,
    cartTotal,
    cartCount,
    toggleCart,
    updateQuantity,
    removeFromCart
  } = useStore();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Slideout */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">
                Shopping Cart ({cartCount})
              </h2>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <FiShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some products to get started</p>
                  <Link
                    to="/products"
                    onClick={toggleCart}
                    className="btn-primary"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                    >
                      {/* Product Image */}
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500">${item.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <FiMinus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 bg-white rounded text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded transition-colors"
                          >
                            <FiPlus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t p-6 space-y-4">
                {/* Total */}
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    onClick={toggleCart}
                    className="w-full btn-primary text-center block"
                  >
                    Checkout
                  </Link>
                  <Link
                    to="/cart"
                    onClick={toggleCart}
                    className="w-full btn-secondary text-center block"
                  >
                    View Cart
                  </Link>
                </div>

                {/* Security Badge */}
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    🔒 Secure checkout with 256-bit SSL encryption
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSlideout;