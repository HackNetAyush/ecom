

const T = () => {
  return (
<div id="webcrumbs"> 
        	<div className="w-[1440px] min-h-screen bg-white">
	  <header className="bg-white shadow-sm border-b sticky top-0 z-50">
	    <div className="px-6 py-4">
	      <div className="flex items-center justify-between">
	        <div className="flex items-center space-x-8">
	          <div className="text-2xl font-bold text-primary-600">LUXE</div>
	          <nav className="hidden md:flex space-x-6">
	            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
	            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">Shop</a>
	            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">Categories</a>
	            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">Deals</a>
	            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
	          </nav>
	        </div>
	        <div className="flex items-center space-x-4">
	          <div className="relative hidden md:block">
	            <input type="text" placeholder="Search products..." className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
	            <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
	          </div>
	          <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
	            <span className="material-symbols-outlined">favorite</span>
	          </button>
	          <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
	            <span className="material-symbols-outlined">person</span>
	          </button>
	          <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
	            <span className="material-symbols-outlined">shopping_cart</span>
	            <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
	          </button>
	        </div>
	      </div>
	    </div>
	  </header>
	
	  <main>
	    <section className="relative h-[600px] bg-gradient-to-r from-primary-100 to-primary-200 overflow-hidden">
	      <div className="absolute inset-0 flex items-center">
	        <div className="px-6 lg:px-12 max-w-2xl">
	          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
	            Summer Collection
	            <span className="block text-primary-600">Up to 70% Off</span>
	          </h1>
	          <p className="text-xl text-gray-600 mb-8">Discover the latest trends and exclusive deals on premium fashion</p>
	          <div className="flex flex-col sm:flex-row gap-4">
	            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105">
	              Shop Now
	            </button>
	            <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all">
	              View Collection
	            </button>
	          </div>
	        </div>
	      </div>
	      <div className="absolute right-0 top-0 w-1/2 h-full">
	        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop" 
	             alt="Fashion model" 
	             className="w-full h-full object-cover" />
	      </div>
	    </section>
	
	    <section className="px-6 py-16">
	      <div className="text-center mb-12">
	        <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
	        <p className="text-gray-600">Explore our curated collections</p>
	      </div>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
	        <div className="group relative bg-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
	          <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop" 
	               alt="Women's fashion" 
	               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
	          <div className="p-6">
	            <h3 className="text-xl font-semibold text-gray-900 mb-2">Women</h3>
	            <p className="text-gray-600 mb-4">Latest trends & styles</p>
	            <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
	              Shop Women →
	            </button>
	          </div>
	        </div>
	        <div className="group relative bg-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
	          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" 
	               alt="Men's fashion" 
	               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
	          <div className="p-6">
	            <h3 className="text-xl font-semibold text-gray-900 mb-2">Men</h3>
	            <p className="text-gray-600 mb-4">Premium collection</p>
	            <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
	              Shop Men →
	            </button>
	          </div>
	        </div>
	        <div className="group relative bg-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
	          <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop" 
	               alt="Sneakers" 
	               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
	          <div className="p-6">
	            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sneakers</h3>
	            <p className="text-gray-600 mb-4">Athletic & casual</p>
	            <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
	              Shop Sneakers →
	            </button>
	          </div>
	        </div>
	        <div className="group relative bg-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
	          <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop" 
	               alt="Accessories" 
	               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
	          <div className="p-6">
	            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessories</h3>
	            <p className="text-gray-600 mb-4">Complete your look</p>
	            <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
	              Shop Accessories →
	            </button>
	          </div>
	        </div>
	      </div>
	    </section>
	
	    <section className="px-6 py-16 bg-gray-50">
	      <div className="flex items-center justify-between mb-8">
	        <div>
	          <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Products</h2>
	          <p className="text-gray-600">Most popular items this week</p>
	        </div>
	        <div className="flex space-x-2">
	          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
	            <span className="material-symbols-outlined">chevron_left</span>
	          </button>
	          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
	            <span className="material-symbols-outlined">chevron_right</span>
	          </button>
	        </div>
	      </div>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
	        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
	          <div className="relative">
	            <img src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop" 
	                 alt="Denim jacket" 
	                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
	            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
	              <span className="material-symbols-outlined text-gray-600">favorite</span>
	            </button>
	            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
	              -30%
	            </div>
	          </div>
	          <div className="p-4">
	            <h3 className="font-semibold text-gray-900 mb-1">Classic Denim Jacket</h3>
	            <p className="text-gray-600 text-sm mb-2">Premium cotton blend</p>
	            <div className="flex items-center justify-between">
	              <div className="flex items-center space-x-2">
	                <span className="text-lg font-bold text-gray-900">$89</span>
	                <span className="text-sm text-gray-500 line-through">$127</span>
	              </div>
	              <div className="flex items-center space-x-1">
	                <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
	                <span className="text-sm text-gray-600">4.8</span>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
	          <div className="relative">
	            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" 
	                 alt="Running shoes" 
	                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
	            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
	              <span className="material-symbols-outlined text-gray-600">favorite</span>
	            </button>
	          </div>
	          <div className="p-4">
	            <h3 className="font-semibold text-gray-900 mb-1">Running Sneakers</h3>
	            <p className="text-gray-600 text-sm mb-2">Lightweight performance</p>
	            <div className="flex items-center justify-between">
	              <div className="flex items-center space-x-2">
	                <span className="text-lg font-bold text-gray-900">$159</span>
	              </div>
	              <div className="flex items-center space-x-1">
	                <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
	                <span className="text-sm text-gray-600">4.9</span>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
	          <div className="relative">
	            <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop" 
	                 alt="Leather handbag" 
	                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
	            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
	              <span className="material-symbols-outlined text-gray-600">favorite</span>
	            </button>
	            <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded text-sm font-semibold">
	              New
	            </div>
	          </div>
	          <div className="p-4">
	            <h3 className="font-semibold text-gray-900 mb-1">Leather Handbag</h3>
	            <p className="text-gray-600 text-sm mb-2">Genuine leather craft</p>
	            <div className="flex items-center justify-between">
	              <div className="flex items-center space-x-2">
	                <span className="text-lg font-bold text-gray-900">$249</span>
	              </div>
	              <div className="flex items-center space-x-1">
	                <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
	                <span className="text-sm text-gray-600">4.7</span>
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
	          <div className="relative">
	            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" 
	                 alt="Summer dress" 
	                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
	            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
	              <span className="material-symbols-outlined text-gray-600">favorite</span>
	            </button>
	            <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
	              Sale
	            </div>
	          </div>
	          <div className="p-4">
	            <h3 className="font-semibold text-gray-900 mb-1">Summer Floral Dress</h3>
	            <p className="text-gray-600 text-sm mb-2">Lightweight cotton</p>
	            <div className="flex items-center justify-between">
	              <div className="flex items-center space-x-2">
	                <span className="text-lg font-bold text-gray-900">$79</span>
	                <span className="text-sm text-gray-500 line-through">$99</span>
	              </div>
	              <div className="flex items-center space-x-1">
	                <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
	                <span className="text-sm text-gray-600">4.6</span>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	
	    <section className="px-6 py-16">
	      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white">
	        <div className="flex flex-col lg:flex-row items-center justify-between">
	          <div className="mb-8 lg:mb-0">
	            <h2 className="text-4xl font-bold mb-4">Flash Sale</h2>
	            <p className="text-xl mb-6 opacity-90">Limited time offer - ends in</p>
	            <div className="flex space-x-4 mb-8">
	              <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
	                <div className="text-2xl font-bold">12</div>
	                <div className="text-sm opacity-75">Hours</div>
	              </div>
	              <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
	                <div className="text-2xl font-bold">34</div>
	                <div className="text-sm opacity-75">Minutes</div>
	              </div>
	              <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
	                <div className="text-2xl font-bold">56</div>
	                <div className="text-sm opacity-75">Seconds</div>
	              </div>
	            </div>
	            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
	              Shop Flash Sale
	            </button>
	          </div>
	          <div className="lg:w-1/3">
	            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop" 
	                 alt="Flash sale products" 
	                 className="w-full rounded-2xl" />
	          </div>
	        </div>
	      </div>
	    </section>
	
	    <section className="px-6 py-16 bg-gray-50">
	      <div className="text-center mb-12">
	        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
	        <p className="text-gray-600">Real reviews from real people</p>
	      </div>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	        <div className="bg-white rounded-2xl p-6 shadow-sm">
	          <div className="flex items-center mb-4">
	            <div className="flex space-x-1">
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	            </div>
	          </div>
	          <p className="text-gray-700 mb-4">Amazing quality and fast delivery. The denim jacket I ordered fits perfectly and looks exactly like the photos. Will definitely shop here again!</p>
	          <div className="flex items-center">
	            <img src="https://images.unsplash.com/photo-1556741576-1d17b478d761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MXwxfHNlYXJjaHwxfHxjdXN0b21lcnxlbnwwfHx8fDE3NTAyNzgwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
	                 alt="Customer Sarah" 
	                 className="w-10 h-10 rounded-full mr-3" />
	            <div>
	              <div className="font-semibold text-gray-900">Sarah Johnson</div>
	              <div className="text-sm text-gray-600">Verified Customer</div>
	            </div>
	          </div>
	        </div>
	        <div className="bg-white rounded-2xl p-6 shadow-sm">
	          <div className="flex items-center mb-4">
	            <div className="flex space-x-1">
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	            </div>
	          </div>
	          <p className="text-gray-700 mb-4">Best online shopping experience Ive had. Great customer service, easy returns, and the sneakers I bought are incredibly comfortable.</p>
	          <div className="flex items-center">
	            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop" 
	                 alt="Customer Mike" 
	                 className="w-10 h-10 rounded-full mr-3" />
	            <div>
	              <div className="font-semibold text-gray-900">Mike Chen</div>
	              <div className="text-sm text-gray-600">Verified Customer</div>
	            </div>
	          </div>
	        </div>
	        <div className="bg-white rounded-2xl p-6 shadow-sm">
	          <div className="flex items-center mb-4">
	            <div className="flex space-x-1">
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	              <span className="material-symbols-outlined text-yellow-400">star</span>
	            </div>
	          </div>
	          <p className="text-gray-700 mb-4">Love the variety and quality of products. The leather handbag I purchased exceeded my expectations. Highly recommend this store!</p>
	          <div className="flex items-center">
	            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop" 
	                 alt="Customer Emma" 
	                 className="w-10 h-10 rounded-full mr-3" />
	            <div>
	              <div className="font-semibold text-gray-900">Emma Davis</div>
	              <div className="text-sm text-gray-600">Verified Customer</div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	
	    <section className="px-6 py-16">
	      <div className="bg-gray-100 rounded-3xl p-8 lg:p-12 text-center">
	        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
	        <p className="text-gray-600 mb-8">Subscribe to our newsletter for exclusive deals and latest fashion trends</p>
	        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
	          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
	          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
	            Subscribe
	          </button>
	        </div>
	      </div>
	    </section>
	  </main>
	
	  <footer className="bg-gray-900 text-white px-6 py-16">
	    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
	      <div>
	        <div className="text-2xl font-bold text-primary-400 mb-4">LUXE</div>
	        <p className="text-gray-400 mb-4">Your premium destination for fashion and lifestyle products. Quality guaranteed.</p>
	        <div className="flex space-x-4">
	          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
	            <i className="fa-brands fa-facebook text-xl"></i>
	          </button>
	          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
	            <i className="fa-brands fa-instagram text-xl"></i>
	          </button>
	          <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
	            <i className="fa-brands fa-twitter text-xl"></i>
	          </button>
	        </div>
	      </div>
	      <div>
	        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
	        <ul className="space-y-2">
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
	        </ul>
	      </div>
	      <div>
	        <h3 className="text-lg font-semibold mb-4">Categories</h3>
	        <ul className="space-y-2">
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Women&apos;s Fashion</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Men&apos;s Fashion</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sneakers</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sale Items</a></li>
	        </ul>
	      </div>
	      <div>
	        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
	        <ul className="space-y-2">
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
	          <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
	        </ul>
	      </div>
	    </div>
	    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
	      <p className="text-gray-400 mb-4 md:mb-0">© 2024 LUXE. All rights reserved.</p>
	      <div className="flex items-center space-x-4">
	      </div>
	    </div>
	  </footer>
	  
	  {/* Next: "Add Product Detail Modal with image zoom and variant selection" */}
	  {/* Next: "Add Shopping Cart Sidebar with quantity controls and checkout button" */}
	  {/* Next: "Add Product Filter Panel with price range, size, and brand filters" */}
	  {/* Next: "Add User Authentication Modal with login/register forms" */}
	  {/* Next: "Add Wishlist Page with saved items and quick add to cart" */}
	</div> 
        </div>
  )
}

export default T;