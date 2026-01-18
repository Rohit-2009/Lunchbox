
import { Meal, SubscriptionPlan } from './types';

export const COLORS = {
  primary: '#556B2F', // Olive Drab - Elegant and natural
  secondary: '#D2B48C', // Tan - Homely and warm
  accent: '#A0522D', // Sienna - Earthy
  background: '#FAF9F6', // Off-white/Cream
  text: '#2D2D2D'
};

export const MEALS: Meal[] = [
  {
    id: '1',
    name: 'Traditional Kerala Sadya Bowl',
    description: 'A miniature feast with Red Rice, Parippu, Thoran, and Avial. Authentic Kerala flavors.',
    category: 'Veg',
    calories: 450,
    protein: 12,
    carbs: 65,
    fats: 14,
    price: 120,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    allergens: ['Mustard']
  },
  {
    id: '2',
    name: 'Homely Malabar Chicken Curry',
    description: 'Slow-cooked chicken in coconut milk with roasted spices, served with soft Appams.',
    category: 'Non-Veg',
    calories: 580,
    protein: 35,
    carbs: 45,
    fats: 22,
    price: 180,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    allergens: ['Nuts']
  },
  {
    id: '3',
    name: 'Jain Paneer Bhurji Meal',
    description: 'Scrambled paneer with fresh capsicum and tomatoes, no root vegetables. Served with Phulkas.',
    category: 'Jain',
    calories: 410,
    protein: 18,
    carbs: 38,
    fats: 19,
    price: 140,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    allergens: ['Dairy']
  },
  {
    id: '4',
    name: 'Dal Tadka & Jeera Rice',
    description: 'Yellow lentils tempered with cumin and garlic, served with aromatic basmati rice.',
    category: 'Veg',
    calories: 380,
    protein: 14,
    carbs: 55,
    fats: 8,
    price: 110,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800',
    allergens: []
  },
  {
    id: '5',
    name: 'Nadan Fish Moilee',
    description: 'Fresh catch cooked in a mild coconut ginger sauce, a Kudumbashree specialty.',
    category: 'Non-Veg',
    calories: 420,
    protein: 28,
    carbs: 20,
    fats: 24,
    price: 200,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    allergens: ['Fish']
  }
];

export const PLANS: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Daily Comfort',
    mealsPerDay: 2,
    pricePerMonth: 4500,
    features: ['Choice of 2 meals daily', 'Flexible timing', 'Health tracking', 'Free delivery']
  },
  {
    id: 'premium',
    name: 'Complete Nutrition',
    mealsPerDay: 3,
    pricePerMonth: 6000,
    features: ['3 meals daily + evening snack', 'Nutritional consultation', 'Priority delivery', 'Weekly special treats']
  }
];
