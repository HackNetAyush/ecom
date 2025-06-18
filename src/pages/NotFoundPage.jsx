import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiSearch, FiArrowLeft } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-8 pb-16 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <Link
            to="/"
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <FiHome className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          
          <Link
            to="/products"
            className="w-full btn-secondary flex items-center justify-center space-x-2"
          >
            <FiSearch className="w-4 h-4" />
            <span>Browse Products</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center space-x-2"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;