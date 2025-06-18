import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMinus, FiPlus, FiX, FiShoppingBag, FiArrowLeft } from 'react-icons/fi';
import useStore from '../store/useStore';
import toast from 'react-hot-toast';

const CartPage = () => {
  const { cart, cartTotal, cartCount, updateQuantity, removeFromCart } = useStore();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
    toast.success('Item removed from cart');
  };

  const shippingCost = cartTotal > 50 ? 0 : 9.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shippingCost + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center py-16">
            <FiShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products" className="btn-primary">
              Continue Shopping
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">{cartCount} items in your cart</p>
          </div>
          <Link
            to="/products"
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-6 border-b border-gray-200 last:border-b-0"
                >
                  {/* Product Image */}
                  <Link to={`/product/${item.slug}`} className="flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      className="font-medium text-gray-900 hover:text-primary-600 line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">{item.brand}</p>
                    
                    {/* Variants */}
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      {item.selectedSize && (
                        <span>Size: {item.selectedSize}</span>
                      )}
                      {item.selectedColor && (
                        <span>Color: {item.selectedColor}</span>
                      )}
                    </div>

                    {/* Mobile Price */}
                    <div className="mt-2 md:hidden">
                      <span className="font-semibold text-gray-900">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  {/* Desktop Price */}
                  <div className="hidden md:block text-right">
                    <span className="font-semibold text-gray-900">
                      ${item.price}
                    </span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-1 bg-gray-100 rounded text-sm font-medium min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="text-right min-w-[4rem]">
                    <span className="font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cartCount} items)</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Free Shipping Notice */}
              {cartTotal < 50 && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="w-full btn-primary mt-6 text-center block"
              >
                Proceed to Checkout
              </Link>

              {/* Security Notice */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  🔒 Secure checkout with 256-bit SSL encryption
                </p>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-3">We accept:</p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    AMEX
                  </div>
                  <div className="w-8 h-5 bg-yellow-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    PP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;