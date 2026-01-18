
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000" 
              alt="Home Cook" 
              className="rounded-3xl shadow-xl w-full"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#556B2F] text-white p-8 rounded-3xl max-w-xs shadow-2xl">
              <h4 className="text-2xl font-bold mb-2">Our Mission</h4>
              <p className="text-sm opacity-90 italic">"Providing the warmth of ghar ka khana with the convenience of modern technology."</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">Societal Upliftment & <span className="text-[#556B2F]">Kudumbashree</span></h2>
            <p className="text-gray-600 leading-relaxed">
              Lunch Box isn't just a food delivery service; it's a movement. We empower local female chefs from the <strong>Kudumbashree</strong> group, providing them with a steady income and a platform to showcase their culinary heritage.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#556B2F]">01</div>
                <h5 className="font-bold">Health First</h5>
                <p className="text-xs text-gray-500">Natural ingredients without chemical tampering.</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#556B2F]">02</div>
                <h5 className="font-bold">Community</h5>
                <p className="text-xs text-gray-500">Supporting local farmers by bulk-buying fresh produce.</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#556B2F]">03</div>
                <h5 className="font-bold">Affordable</h5>
                <p className="text-xs text-gray-500">Ghar ka khana shouldn't break the bank.</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              By focusing on personalization, trust, and community-driven food experiences, we aim to stand out as the most reliable daily meal solution in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
