import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTrendingUp, FiClock, FiStar } from 'react-icons/fi';
import ProductCard from '../components/Product/ProductCard';
import { banners, categories, featuredProducts, deals } from '../data/mockData';

const HomePage = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentBanner ? 1 : 0,
              scale: index === currentBanner ? 1 : 1.1
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ 
                    y: index === currentBanner ? 0 : 30, 
                    opacity: index === currentBanner ? 1 : 0 
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold mb-4"
                >
                  {banner.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ 
                    y: index === currentBanner ? 0 : 30, 
                    opacity: index === currentBanner ? 1 : 0 
                  }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl mb-8 text-gray-200"
                >
                  {banner.subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ 
                    y: index === currentBanner ? 0 : 30, 
                    opacity: index === currentBanner ? 1 : 0 
                  }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    to={banner.link}
                    className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 hover:scale-105"
                  >
                    <span>{banner.cta}</span>
                    <FiArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Banner Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentBanner ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section id="category" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of premium products across different categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/category/${category.slug}`}>
                  <div className="relative overflow-hidden rounded-2xl aspect-square">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm text-gray-200 mb-3">
                        {category.subcategories.length} subcategories
                      </p>
                      <div className="flex items-center text-accent-400 font-medium">
                        <span>Shop Now</span>
                        <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600">
                Hand-picked products with the highest ratings and reviews
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <span>View All</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FiClock className="w-6 h-6 text-red-200" />
              <span className="text-red-200 font-medium">Limited Time Only</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flash Sale - Up to 50% Off
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Don't miss out on these incredible deals. Sale ends in 24 hours!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden text-gray-900"
              >
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-red-600">
                      ${product.price}
                    </span>
                    <span className="text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <Link
                    to={`/product/${product.slug}`}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-colors block text-center"
                  >
                    Shop Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Happy Customers' },
              { number: '10K+', label: 'Products Available' },
              { number: '500+', label: 'Brands' },
              { number: '24/7', label: 'Customer Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-accent-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - see what our satisfied customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Verified Buyer',
                rating: 5,
                comment: 'Absolutely love shopping here! The quality is exceptional and delivery is always fast.',
                avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
              },
              {
                name: 'Mike Chen',
                role: 'Regular Customer',
                rating: 5,
                comment: 'Best online shopping experience I\'ve had. Customer service is outstanding.',
                avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
              },
              {
                name: 'Emma Wilson',
                role: 'Premium Member',
                rating: 5,
                comment: 'The premium quality and attention to detail in every product is remarkable.',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;