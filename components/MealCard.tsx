
import React from 'react';
import { Meal } from '../types';

interface MealCardProps {
  meal: Meal;
  onAddToCart?: (meal: Meal) => void;
}

const MealCard: React.FC<MealCardProps> = ({ meal, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={meal.image} 
          alt={meal.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#556B2F] uppercase tracking-wider">
          {meal.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#2D2D2D] leading-tight">{meal.name}</h3>
          <span className="text-lg font-bold text-[#556B2F]">₹{meal.price}</span>
        </div>
        <p className="text-sm text-gray-500 mb-6 line-clamp-2">{meal.description}</p>
        
        <div className="bg-[#FAF9F6] p-4 rounded-xl space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400 uppercase font-semibold">Nutritional Facts</span>
            <span className="text-[#556B2F] font-bold">{meal.calories} kcal</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="text-xs font-bold text-gray-700">{meal.protein}g</div>
              <div className="text-[10px] text-gray-400 uppercase">Protein</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-gray-700">{meal.carbs}g</div>
              <div className="text-[10px] text-gray-400 uppercase">Carbs</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-gray-700">{meal.fats}g</div>
              <div className="text-[10px] text-gray-400 uppercase">Fats</div>
            </div>
          </div>
        </div>

        {meal.allergens.length > 0 && (
          <div className="mt-4 text-[10px] text-red-500 italic">
            Allergens: {meal.allergens.join(', ')}
          </div>
        )}

        <button 
          onClick={() => onAddToCart?.(meal)}
          className="w-full mt-6 py-3 bg-[#FAF9F6] text-[#556B2F] font-bold rounded-lg hover:bg-[#556B2F] hover:text-white transition-all border border-[#556B2F]/10"
        >
          Add to Box
        </button>
      </div>
    </div>
  );
};

export default MealCard;
