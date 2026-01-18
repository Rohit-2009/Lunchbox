
import React from 'react';
import { PLANS } from '../constants';

const SubscriptionPlans: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          Whether you need two meals or a complete three-meal nutrition plan, we have you covered with flexible subscriptions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map(plan => (
            <div key={plan.id} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-[#556B2F]">₹{plan.pricePerMonth}</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-10 text-left w-full">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#556B2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#556B2F] text-white font-bold rounded-xl hover:bg-[#4a5e29] transition-all shadow-md">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
