import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // User state
      user: null,
      isAuthenticated: false,
      
      // Cart state
      cart: [],
      cartCount: 0,
      cartTotal: 0,
      
      // Wishlist state
      wishlist: [],
      
      // UI state
      isCartOpen: false,
      isMenuOpen: false,
      isDarkMode: false,
      
      // Search state
      searchQuery: '',
      searchResults: [],
      recentSearches: [],
      
      // Product state
      products: [],
      categories: [],
      filters: {
        category: '',
        priceRange: [0, 1000],
        rating: 0,
        inStock: false,
      },
      
      // Auth actions
      login: (userData) => set({ user: userData, isAuthenticated: true }),
      logout: () => set({ 
        user: null, 
        isAuthenticated: false,
        cart: [],
        wishlist: [],
        cartCount: 0,
        cartTotal: 0
      }),
      
      // User actions
      updateUser: (userData) => set({ user: userData }),
      
      // Cart actions
      addToCart: (product) => {
        const { cart } = get();
        const existingItem = cart.find(item => 
          item.id === product.id && 
          item.selectedSize === product.selectedSize && 
          item.selectedColor === product.selectedColor
        );
        
        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.id === product.id && 
              item.selectedSize === product.selectedSize && 
              item.selectedColor === product.selectedColor
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            )
          });
        } else {
          set({
            cart: [...cart, { ...product, quantity: product.quantity || 1 }]
          });
        }
        
        get().updateCartTotals();
      },
      
      removeFromCart: (productId) => {
        set({
          cart: get().cart.filter(item => item.id !== productId)
        });
        get().updateCartTotals();
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        
        set({
          cart: get().cart.map(item =>
            item.id === productId
              ? { ...item, quantity }
              : item
          )
        });
        get().updateCartTotals();
      },
      
      clearCart: () => {
        set({ cart: [], cartCount: 0, cartTotal: 0 });
      },
      
      updateCartTotals: () => {
        const { cart } = get();
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        set({ cartCount, cartTotal });
      },
      
      // Wishlist actions
      addToWishlist: (product) => {
        const { wishlist } = get();
        if (!wishlist.find(item => item.id === product.id)) {
          set({ wishlist: [...wishlist, product] });
        }
      },
      
      removeFromWishlist: (productId) => {
        set({
          wishlist: get().wishlist.filter(item => item.id !== productId)
        });
      },
      
      clearWishlist: () => {
        set({ wishlist: [] });
      },
      
      // UI actions
      toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
      toggleMenu: () => set({ isMenuOpen: !get().isMenuOpen }),
      toggleDarkMode: () => set({ isDarkMode: !get().isDarkMode }),
      
      // Search actions
      setSearchQuery: (query) => set({ searchQuery: query }),
      addRecentSearch: (query) => {
        const { recentSearches } = get();
        const filtered = recentSearches.filter(search => search !== query);
        set({
          recentSearches: [query, ...filtered].slice(0, 5)
        });
      },
      clearRecentSearches: () => set({ recentSearches: [] }),
      
      // Filter actions
      setFilters: (filters) => set({ filters: { ...get().filters, ...filters } }),
      clearFilters: () => set({
        filters: {
          category: '',
          priceRange: [0, 1000],
          rating: 0,
          inStock: false,
        }
      }),
    }),
    {
      name: 'ecommerce-store',
      partialize: (state) => ({
        cart: state.cart,
        cartCount: state.cartCount,
        cartTotal: state.cartTotal,
        wishlist: state.wishlist,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        recentSearches: state.recentSearches,
        isDarkMode: state.isDarkMode,
      }),
    }
  )
);

export default useStore;