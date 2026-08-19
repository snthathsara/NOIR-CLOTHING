import React, { createContext, useContext, useState, useEffect } from 'react';
import { products } from '../data/products';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('daizy-cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'prod-01',
          name: 'The Minimalist Overcoat',
          price: 1450,
          size: 'M',
          color: 'Charcoal Black',
          image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85',
          quantity: 1,
          drop: 'Collection 2026 — Capsule 04',
          material: '100% Double-Faced Cashmere',
          sku: 'DAIZY-OVC-04-01'
        }
      ];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('daizy-wishlist');
      return saved ? JSON.parse(saved) : ['prod-02', 'prod-14', 'prod-17'];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [isLuxuryGiftWrap, setIsLuxuryGiftWrap] = useState(true);
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [notification, setNotification] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('daizy-cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('daizy-wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const showNotification = (message, detail) => {
    setNotification({ message, detail });
    setTimeout(() => {
      setNotification(null);
    }, 3600);
  };

  const addToCart = (product, size = 'M', quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.id === product.id && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            size: size,
            color: product.color || 'Forest Obsidian',
            image: product.images ? product.images[0] : product.image,
            quantity: quantity,
            drop: product.drop || 'Capsule 04',
            material: product.material || 'Loro Piana Cashmere',
            sku: product.sku || `NOIR-CAP-${product.id}`
          }
        ];
      }
    });

    showNotification(
      `ACQUIRED: ${product.name.toUpperCase()}`,
      `Size ${size} added to your private archive bag.`
    );
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      const updated = exists ? prev.filter(id => id !== productId) : [...prev, productId];
      const prod = products.find(p => p.id === productId);
      if (prod) {
        showNotification(
          exists ? 'REMOVED FROM SAVED' : 'SAVED TO PRIVATE CURATION',
          prod.name
        );
      }
      return updated;
    });
  };

  const removeFromCart = (id, size) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, delta) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.id === id && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromo = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ARCHITECT10' || clean === 'EMERALD10' || clean === 'MILAN10') {
      setAppliedPromo({ code: clean, discount: 0.10, label: '10% VIP Atelier Privilege' });
      return { success: true, message: 'VIP Atelier privilege applied (-10%)' };
    } else if (clean === 'CAPSULE04' || clean === 'BOTANICAL15') {
      setAppliedPromo({ code: clean, discount: 0.15, label: '15% Botanical Edition Access' });
      return { success: true, message: 'Botanical Edition access active (-15%)' };
    }
    return { success: false, message: 'Invalid or expired atelier voucher' };
  };

  const removePromo = () => {
    setAppliedPromo(null);
  };

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const rawSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedPromo ? rawSubtotal * appliedPromo.discount : 0;
  const subtotal = Math.max(0, rawSubtotal - discountAmount);
  const shippingThreshold = 1000;
  const shippingFee = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 45;
  const total = subtotal + shippingFee;

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        toggleWishlist,
        itemCount,
        wishlistCount: wishlist.length,
        rawSubtotal,
        subtotal,
        discountAmount,
        appliedPromo,
        shippingFee,
        shippingThreshold,
        total,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        quickViewProduct,
        setQuickViewProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isConciergeOpen,
        setIsConciergeOpen,
        isLuxuryGiftWrap,
        setIsLuxuryGiftWrap,
        searchQuery,
        setSearchQuery,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        applyPromo,
        removePromo,
        notification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
