
export interface Meal {
  id: string;
  name: string;
  description: string;
  category: 'Veg' | 'Non-Veg' | 'Jain';
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  price: number;
  image: string;
  allergens: string[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  mealsPerDay: 2 | 3;
  pricePerMonth: number;
  features: string[];
}

export interface UserPreferences {
  dietaryPreference: 'Veg' | 'Non-Veg' | 'Jain' | 'All';
  allergies: string[];
}

export interface CartItem {
  meal: Meal;
  quantity: number;
}
