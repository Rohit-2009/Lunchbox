
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MealCard from './components/MealCard';
import About from './components/About';
import SubscriptionPlans from './components/SubscriptionPlans';
import AIConsultant from './components/AIConsultant';
import Cart from './components/Cart';
import { MEALS } from './constants';
import { Meal, CartItem } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (meal: Meal) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.meal.id === meal.id);
      if (existing) {
        return prev.map(item => 
          item.meal.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { meal, quantity: 1 }];
    });
    // Optional: Auto-switch to cart or show a toast. For now, just a silent add is fine for simplicity.
  };

  const removeFromCart = (mealId: string) => {
    setCartItems(prev => prev.filter(item => item.meal.id !== mealId));
  };

  const updateQuantity = (mealId: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.meal.id === mealId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="space-y-12">
            <Hero onMenuClick={() => setCurrentPage('menu')} />
            
            {/* Featured Section */}
            <section className="max-w-7xl mx-auto px-6 py-12">
              <div className="flex justify-between items-end mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-2">Today's Homely Specials</h2>
                  <p className="text-gray-500">Freshly prepared by our Kudumbashree chefs.</p>
                </div>
                <button onClick={() => setCurrentPage('menu')} className="text-[#556B2F] font-bold border-b-2 border-[#556B2F]">View Full Menu</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MEALS.slice(0, 3).map(meal => (
                  <MealCard key={meal.id} meal={meal} onAddToCart={addToCart} />
                ))}
              </div>
            </section>

            <About />
          </div>
        );
      case 'menu':
        return (
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Our Daily Menu</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Explore a variety of personalized meals crafted for your cravings and health needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MEALS.map(meal => (
                <MealCard key={meal.id} meal={meal} onAddToCart={addToCart} />
              ))}
            </div>
          </div>
        );
      case 'about':
        return <About />;
      case 'plans':
        return <SubscriptionPlans />;
      case 'cart':
        return (
          <Cart 
            items={cartItems} 
            onRemove={removeFromCart} 
            onUpdateQuantity={updateQuantity} 
            onCheckout={() => alert('Checkout functionality coming soon!')} 
          />
        );
      case 'ai':
        return (
          <div className="py-20 bg-[#FAF9F6]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-2">Lunch Mate</h2>
              <p className="text-gray-500">Get personalized advice on nutrition, allergens, and meal selection.</p>
            </div>
            <AIConsultant />
          </div>
        );
      default:
        return <Hero onMenuClick={() => setCurrentPage('menu')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-[#556B2F]/10 selection:text-[#556B2F]">
      <Header onNav={setCurrentPage} currentPage={currentPage} cartCount={totalItems} />
      
      <main className="transition-opacity duration-300">
        {renderPage()}
      </main>

      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#556B2F] rounded flex items-center justify-center text-white font-bold">L</div>
              <h1 className="text-xl font-bold tracking-tight">LUNCH BOX</h1>
            </div>
            <p className="text-gray-500 max-w-md text-sm leading-relaxed">
              Hyperlocal food startup bridging the gap between home cooks and people seeking affordable, healthy, and personalized meals daily. Supporting local Kudumbashree chefs.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-[#556B2F] cursor-pointer" onClick={() => setCurrentPage('menu')}>Menu</li>
              <li className="hover:text-[#556B2F] cursor-pointer" onClick={() => setCurrentPage('plans')}>Subscription Plans</li>
              <li className="hover:text-[#556B2F] cursor-pointer" onClick={() => setCurrentPage('about')}>Our Impact</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+91 90618 69477</li>
              <li>support@lunchbox.in</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-50 text-center text-xs text-gray-400">
          © 2024 Lunch Box. All rights reserved. Handcrafted with love in Kerala.
        </div>
      </footer>
    </div>
  );
};

export default App;
