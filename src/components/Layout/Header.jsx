import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiShoppingCart, 
  FiUser, 
  FiMenu, 
  FiX, 
  FiHeart,
  FiMapPin,
  FiLogOut
} from 'react-icons/fi';
import useStore from '../../store/useStore';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // NEW STATE
  const navigate = useNavigate();
  
  const {
    cartCount,
    isAuthenticated,
    user,
    isCartOpen,
    isMenuOpen,
    searchQuery,
    recentSearches,
    toggleCart,
    toggleMenu,
    setSearchQuery,
    addRecentSearch,
    logout
  } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addRecentSearch(searchQuery.trim());
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false); // Hide search after submit
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Categories', path: '/#category' },
    { name: 'Deals', path: '/deals' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      } border-b border-gray-100`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top bar */}
      <div className="bg-primary-800 text-white text-xs md:text-sm py-2 px-2 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <span className="flex items-center">
            <FiMapPin className="w-4 h-4 mr-1" />
            Free shipping on orders over $50
          </span>
          <div className="flex items-center space-x-4">
            <Link to="/track-order" className="hover:text-accent-300 transition-colors underline-offset-2 hover:underline">
              Track Order
            </Link>
            <Link to="/help" className="hover:text-accent-300 transition-colors underline-offset-2 hover:underline">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 md:space-x-4 min-w-max">
            {/* <motion.div
              className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-lg md:text-xl">E</span>
            </motion.div> */}
            <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              VOGATI
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group px-1"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search Icon & Search Bar + Action Buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Icon & Search Bar */}
            <div className="relative">
              {/* Show icon if search is not open */}
              {!showSearch && (
                <button
                  aria-label="Open search"
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-primary-500"
                  onClick={() => setShowSearch(true)}
                >
                  <FiSearch className="w-6 h-6 text-gray-700" />
                </button>
              )}
              {/* Show input if search is open */}
              {showSearch && (
                <form
                  onSubmit={handleSearch}
                  className="relative"
                  style={{ minWidth: 180, maxWidth: 320 }}
                >
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    className="w-full pl-4 pr-12 py-2 md:py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 shadow-sm"
                  />
                  <button
                    type="submit"
                    aria-label="Search"
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 p-1"
                  >
                    <FiSearch className="w-5 h-5 text-gray-400" />
                  </button>
                  <button
                    type="button"
                    aria-label="Close search"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1"
                    onClick={() => setShowSearch(false)}
                  >
                    <FiX className="w-5 h-5 text-gray-400" />
                  </button>
                  {/* Search Suggestions */}
                  <AnimatePresence>
                    {isSearchFocused && recentSearches.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 py-2 z-50"
                      >
                        <div className="px-4 py-2 text-xs md:text-sm text-gray-500 font-medium">Recent Searches</div>
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setSearchQuery(search);
                              navigate(`/search?q=${encodeURIComponent(search)}`);
                              setShowSearch(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                          >
                            {search}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>

            {/* Action buttons (hide when search is open) */}
            {!showSearch && (
              <>
                {/* Wishlist */}
                <Link to="/wishlist" aria-label="Wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-primary-500">
                  <FiHeart className="w-6 h-6 text-gray-700" />
                </Link>

                {/* Cart */}
                <button
                  onClick={toggleCart}
                  aria-label="Cart"
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-primary-500"
                >
                  <FiShoppingCart className="w-6 h-6 text-gray-700" />
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </button>

                {/* User Menu */}
                <div className="relative">
                  {isAuthenticated ? (
                    <div className="relative">
                      <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        aria-label="User menu"
                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-primary-500"
                      >
                        <img
                          src={user?.avatar || 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'}
                          alt="Profile"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="hidden lg:block text-xs md:text-sm font-medium text-gray-700">
                          {user?.name || 'Account'}
                        </span>
                      </button>
                      {/* User Dropdown */}
                      <AnimatePresence>
                        {showUserMenu && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute right-0 top-full mt-2 w-44 md:w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                          >
                            <Link
                              to="/profile"
                              onClick={() => setShowUserMenu(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Profile
                            </Link>
                            <Link
                              to="/orders"
                              onClick={() => setShowUserMenu(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Orders
                            </Link>
                            <Link
                              to="/wishlist"
                              onClick={() => setShowUserMenu(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Wishlist
                            </Link>
                            <Link
                              to="/settings"
                              onClick={() => setShowUserMenu(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                              Settings
                            </Link>
                            <hr className="my-2" />
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                            >
                              <FiLogOut className="w-4 h-4" />
                              <span>Sign Out</span>
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to="/auth" className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-primary-500">
                      <FiUser className="w-6 h-6 text-gray-700" />
                      <span className="hidden lg:block text-xs md:text-sm font-medium text-gray-700">
                        Sign In
                      </span>
                    </Link>
                  )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={toggleMenu}
                  aria-label="Open menu"
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-primary-500"
                >
                  {isMenuOpen ? (
                    <FiX className="w-6 h-6 text-gray-700" />
                  ) : (
                    <FiMenu className="w-6 h-6 text-gray-700" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!showSearch && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
            >
              <nav className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => toggleMenu()}
                    className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                {isAuthenticated && (
                  <>
                    <hr className="my-2" />
                    <Link
                      to="/profile"
                      onClick={() => toggleMenu()}
                      className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/orders"
                      onClick={() => toggleMenu()}
                      className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleMenu();
                      }}
                      className="w-full text-left py-3 px-4 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Sign Out
                    </button>
                  </>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.header>
  );
};

export default Header;