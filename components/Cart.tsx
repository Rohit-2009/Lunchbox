
import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemove: (mealId: string) => void;
  onUpdateQuantity: (mealId: string, delta: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQuantity, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.meal.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center space-y-6">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold">Your Box is Empty</h2>
        <p className="text-gray-500">Add some delicious home-cooked meals to get started!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold mb-10">Your Lunch Box</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.meal.id} className="flex gap-6 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm items-center">
              <img src={item.meal.image} alt={item.meal.name} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{item.meal.name}</h3>
                <p className="text-sm text-gray-400">₹{item.meal.price} per meal</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button 
                      onClick={() => onUpdateQuantity(item.meal.id, -1)}
                      className="px-3 py-1 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-sm font-bold border-x">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.meal.id, 1)}
                      className="px-3 py-1 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => onRemove(item.meal.id)}
                    className="text-xs text-red-400 hover:text-red-600 font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#556B2F]">₹{item.meal.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-fit space-y-6">
          <h3 className="text-xl font-bold border-b pb-4">Order Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-800">₹{total}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Delivery</span>
              <span className="text-[#556B2F] font-medium italic">Free</span>
            </div>
            <div className="pt-4 border-t flex justify-between">
              <span className="font-bold">Total</span>
              <span className="text-2xl font-bold text-[#556B2F]">₹{total}</span>
            </div>
          </div>
          <button 
            onClick={onCheckout}
            className="w-full py-4 bg-[#556B2F] text-white font-bold rounded-xl hover:bg-[#4a5e29] transition-all shadow-md"
          >
            Checkout
          </button>
          <p className="text-[10px] text-gray-400 text-center italic">
            Secure payments & lightning fast delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
