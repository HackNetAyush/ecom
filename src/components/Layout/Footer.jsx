import { Link } from 'react-router-dom';
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', path: '/products' },
        { name: 'Electronics', path: '/category/electronics' },
        { name: 'Fashion', path: '/category/fashion' },
        { name: 'Home & Garden', path: '/category/home-garden' },
        { name: 'Sports', path: '/category/sports' },
        { name: 'Deals', path: '/deals' },
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Track Your Order', path: '/track-order' },
        { name: 'Returns & Exchanges', path: '/returns' },
        { name: 'Shipping Info', path: '/shipping' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Press', path: '/press' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Gift Cards', path: '/gift-cards' },
        { name: 'Affiliate Program', path: '/affiliate' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'Accessibility', path: '/accessibility' },
        { name: 'Data Protection', path: '/data-protection' },
      ]
    }
  ];

  return (
    <footer className="bg-primary-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
            <p className="text-primary-200 mb-6">
              Subscribe to our newsletter for exclusive deals and latest updates
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-accent-500 text-gray-900"
              />
              <button className="bg-accent-500 hover:bg-accent-600 px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold">ElegantShop</span>
            </Link>
            <p className="text-primary-300 mb-6 leading-relaxed">
              Your premium destination for quality products and exceptional shopping experience.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <FiPhone className="w-4 h-4 text-accent-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-4 h-4 text-accent-400" />
                <span>support@elegantshop.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-4 h-4 text-accent-400" />
                <span>123 Commerce St, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-300">
              © {currentYear} ElegantShop. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-300 mr-2">Follow us:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Payment Methods */}
            <div className="text-sm text-primary-300">
              Secure payments accepted
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;