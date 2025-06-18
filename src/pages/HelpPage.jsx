import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiChevronDown, FiChevronUp, FiHelpCircle, FiTruck, FiRefreshCw, FiCreditCard, FiShield } from 'react-icons/fi';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    {
      icon: FiTruck,
      title: 'Shipping & Delivery',
      description: 'Track orders, shipping times, and delivery options',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FiRefreshCw,
      title: 'Returns & Exchanges',
      description: 'Return policy, exchange process, and refunds',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: FiCreditCard,
      title: 'Payment & Billing',
      description: 'Payment methods, billing issues, and invoices',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: FiShield,
      title: 'Account & Security',
      description: 'Account settings, password, and privacy',
      color: 'bg-red-100 text-red-600'
    }
  ];

  const faqs = [
    {
      category: 'Shipping & Delivery',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) and overnight shipping are also available. International shipping times vary by destination.'
    },
    {
      category: 'Shipping & Delivery',
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and visiting the "Orders" section.'
    },
    {
      category: 'Shipping & Delivery',
      question: 'Do you offer free shipping?',
      answer: 'Yes! We offer free standard shipping on all orders over $50 within the US. For orders under $50, standard shipping is $5.99.'
    },
    {
      category: 'Returns & Exchanges',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some restrictions apply to certain categories like intimate apparel and final sale items.'
    },
    {
      category: 'Returns & Exchanges',
      question: 'How do I return an item?',
      answer: 'To return an item, log into your account, go to "Orders," find your order, and click "Return Items." Follow the prompts to print a prepaid return label.'
    },
    {
      category: 'Returns & Exchanges',
      question: 'When will I receive my refund?',
      answer: 'Refunds are processed within 3-5 business days after we receive your returned item. The refund will appear on your original payment method within 5-10 business days.'
    },
    {
      category: 'Payment & Billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay.'
    },
    {
      category: 'Payment & Billing',
      question: 'Is my payment information secure?',
      answer: 'Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.'
    },
    {
      category: 'Account & Security',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.'
    },
    {
      category: 'Account & Security',
      question: 'How do I update my account information?',
      answer: 'Log into your account and go to "Account Settings" where you can update your personal information, shipping addresses, and communication preferences.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-8 pb-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center mb-6"
          >
            <FiHelpCircle className="w-16 h-16 text-accent-400" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            How can we help you?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-200 mb-8"
          >
            Find answers to common questions or get in touch with our support team
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:ring-2 focus:ring-accent-500 focus:outline-none"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Help Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Browse Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No results found for "{searchQuery}"</p>
                <p className="text-gray-400 mt-2">Try searching with different keywords</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
                          {faq.category}
                        </span>
                        <h3 className="font-semibold text-gray-900 mt-1">
                          {faq.question}
                        </h3>
                      </div>
                      {expandedFaq === index ? (
                        <FiChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still need help?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our customer support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@elegantshop.com"
                className="btn-secondary"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpPage;