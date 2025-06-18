export const categories = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500',
    subcategories: ['Smartphones', 'Laptops', 'Headphones', 'Cameras']
  },
  {
    id: 2,
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories']
  },
  {
    id: 3,
    name: 'Home & Garden',
    slug: 'home-garden',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden Tools']
  },
  {
    id: 4,
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=500',
    subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Water Sports']
  }
];

export const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: 299.99,
    originalPrice: 399.99,
    category: 'Electronics',
    brand: 'TechSound',
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience premium audio quality with our latest wireless headphones featuring active noise cancellation.',
    features: ['Active Noise Cancellation', '30-hour battery life', 'Quick charge', 'Premium materials'],
    tags: ['wireless', 'premium', 'noise-cancelling'],
    discount: 25
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    slug: 'smart-fitness-watch',
    price: 199.99,
    originalPrice: 249.99,
    category: 'Electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 1892,
    inStock: true,
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Waterproof', '7-day battery'],
    tags: ['fitness', 'smartwatch', 'health'],
    discount: 20
  },
  {
    id: 3,
    name: 'Designer Leather Jacket',
    slug: 'designer-leather-jacket',
    price: 449.99,
    originalPrice: null,
    category: 'Fashion',
    brand: 'StyleCraft',
    rating: 4.9,
    reviewCount: 756,
    inStock: true,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Handcrafted genuine leather jacket with premium stitching and timeless design.',
    features: ['Genuine Leather', 'Premium Stitching', 'Multiple Pockets', 'Classic Design'],
    tags: ['leather', 'fashion', 'designer'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Brown', 'Navy']
  },
  {
    id: 4,
    name: 'Modern Coffee Table',
    slug: 'modern-coffee-table',
    price: 329.99,
    originalPrice: 429.99,
    category: 'Home & Garden',
    brand: 'HomeStyle',
    rating: 4.7,
    reviewCount: 423,
    inStock: true,
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant modern coffee table perfect for contemporary living spaces.',
    features: ['Solid Wood', 'Modern Design', 'Storage Drawer', 'Easy Assembly'],
    tags: ['furniture', 'modern', 'coffee-table'],
    discount: 23
  },
  {
    id: 5,
    name: 'Professional Running Shoes',
    slug: 'professional-running-shoes',
    price: 129.99,
    originalPrice: 159.99,
    category: 'Sports',
    brand: 'RunMax',
    rating: 4.5,
    reviewCount: 1234,
    inStock: true,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Professional-grade running shoes designed for comfort and performance.',
    features: ['Breathable Mesh', 'Cushioned Sole', 'Lightweight', 'Durable Construction'],
    tags: ['running', 'sports', 'shoes'],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Blue', 'Red'],
    discount: 19
  },
  {
    id: 6,
    name: 'Luxury Skincare Set',
    slug: 'luxury-skincare-set',
    price: 89.99,
    originalPrice: 119.99,
    category: 'Beauty',
    brand: 'GlowLux',
    rating: 4.8,
    reviewCount: 892,
    inStock: true,
    images: [
      'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Complete luxury skincare routine with premium organic ingredients.',
    features: ['Organic Ingredients', 'Anti-Aging', 'Hydrating Formula', 'Dermatologist Tested'],
    tags: ['skincare', 'luxury', 'organic'],
    discount: 25
  }
];

export const featuredProducts = products.filter(product => product.rating >= 4.7);

export const deals = products.filter(product => product.discount && product.discount > 20);

export const reviews = [
  {
    id: 1,
    productId: 1,
    user: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing sound quality and comfortable fit. Best headphones I\'ve ever owned!',
    date: '2024-01-15',
    verified: true
  },
  {
    id: 2,
    productId: 1,
    user: 'Mike Chen',
    rating: 5,
    comment: 'The noise cancellation is incredible. Perfect for travel and work.',
    date: '2024-01-10',
    verified: true
  },
  {
    id: 3,
    productId: 2,
    user: 'Emma Wilson',
    rating: 4,
    comment: 'Great fitness tracking features. Battery life is excellent as advertised.',
    date: '2024-01-08',
    verified: true
  }
];

export const banners = [
  {
    id: 1,
    title: 'Summer Sale',
    subtitle: 'Up to 50% off on selected items',
    image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: 'Shop Now',
    link: '/sale'
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Discover the latest trends',
    image: 'https://www.lux-review.com/wp-content/uploads/2020/10/fashion-store.jpg',
    cta: 'Explore',
    link: '/new-arrivals'
  },
  {
    id: 3,
    title: 'Premium Collection',
    subtitle: 'Luxury items for discerning customers',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1200',
    cta: 'View Collection',
    link: '/premium'
  }
];