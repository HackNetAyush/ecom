import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiPackage, FiMail, FiDownload } from 'react-icons/fi';

const OrderSuccessPage = () => {
  const location = useLocation();
  const order = location.state?.order;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen pt-8 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <FiCheck className="w-10 h-10 text-green-600" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Order Confirmed!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600"
          >
            Thank you for your purchase. Your order has been successfully placed.
          </motion.p>
        </motion.div>

        {/* Order Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          {/* Order Header */}
          <div className="bg-primary-50 px-6 py-4 border-b border-primary-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-primary-900">
                  Order #{order.id}
                </h2>
                <p className="text-sm text-primary-700">
                  Placed on {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary-900">
                  ${order.total.toFixed(2)}
                </p>
                <p className="text-sm text-primary-700">
                  {order.items.length} item{order.items.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="px-6 pb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Shipping Address</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}
              </p>
              <p className="text-gray-600">{order.shippingAddress.address}</p>
              <p className="text-gray-600">
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="font-semibold text-gray-900 mb-6">What happens next?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FiMail className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Order Confirmation</h4>
                <p className="text-sm text-gray-600">
                  You'll receive an email confirmation shortly with your order details.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <FiPackage className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Processing</h4>
                <p className="text-sm text-gray-600">
                  We'll process your order within 1-2 business days.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FiCheck className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Shipping</h4>
                <p className="text-sm text-gray-600">
                  Once shipped, you'll receive tracking information to monitor your package.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/orders" className="btn-primary flex items-center justify-center space-x-2">
            <FiPackage className="w-4 h-4" />
            <span>View Order Status</span>
          </Link>
          
          <button className="btn-secondary flex items-center justify-center space-x-2">
            <FiDownload className="w-4 h-4" />
            <span>Download Receipt</span>
          </button>
          
          <Link to="/products" className="btn-secondary">
            Continue Shopping
          </Link>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need help with your order?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              Contact Support
            </Link>
            <Link to="/help" className="text-primary-600 hover:text-primary-700 font-medium">
              Visit Help Center
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;