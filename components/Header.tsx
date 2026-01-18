
import React from 'react';

interface HeaderProps {
  onNav: (page: string) => void;
  currentPage: string;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onNav, currentPage, cartCount }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNav('home')}
        >
          <div className="w-10 h-10 bg-[#556B2F] rounded-lg flex items-center justify-center text-white font-bold text-xl">L</div>
          <h1 className="text-2xl font-bold tracking-tight text-[#2D2D2D]">LUNCH BOX</h1>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <button 
            onClick={() => onNav('home')}
            className={`hover:text-[#556B2F] transition-colors ${currentPage === 'home' ? 'text-[#556B2F]' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => onNav('menu')}
            className={`hover:text-[#556B2F] transition-colors ${currentPage === 'menu' ? 'text-[#556B2F]' : ''}`}
          >
            Our Menu
          </button>
          <button 
            onClick={() => onNav('about')}
            className={`hover:text-[#556B2F] transition-colors ${currentPage === 'about' ? 'text-[#556B2F]' : ''}`}
          >
            Our Story
          </button>
          <button 
            onClick={() => onNav('plans')}
            className={`hover:text-[#556B2F] transition-colors ${currentPage === 'plans' ? 'text-[#556B2F]' : ''}`}
          >
            Subscription
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNav('cart')}
            className="relative p-2 text-gray-600 hover:text-[#556B2F] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#A0522D] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => onNav('ai')}
            className="bg-[#556B2F] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4a5e29] transition-all shadow-sm"
          >
            Lunch Mate
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
