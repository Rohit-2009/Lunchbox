
import React from 'react';

const Hero: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <span className="text-[#556B2F] font-semibold tracking-widest text-sm uppercase">Authentic & Homely</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Delicious <span className="text-[#556B2F]">Healthy</span> Meals Delivered Fast.
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Bridging the gap between talented home cooks and you. Experience the warmth of "ghar ka khana" customized to your dietary needs.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={onMenuClick}
              className="bg-[#556B2F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#4a5e29] transition-all"
            >
              Order Your Meal Now
            </button>
            <div className="flex flex-col justify-center text-sm">
              <span className="text-gray-400 font-medium">Customer Support</span>
              <span className="text-gray-800 font-bold">9061869477</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-[#D2B48C]/20 rounded-full absolute -top-10 -right-10 w-full h-full -z-10 blur-3xl animate-pulse"></div>
          <img 
            src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200" 
            alt="Healthy Lunch Box" 
            className="rounded-3xl shadow-2xl w-full h-auto object-cover border-8 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
