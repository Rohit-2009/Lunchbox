
import { GoogleGenAI } from "@google/genai";
// Corrected import from MEAL to MEALS
import { MEALS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getMealRecommendation(userPrompt: string, preferences: any) {
  try {
    // Correctly using the imported MEALS constant
    const mealContext = MEALS.map(m => `${m.name} (${m.category}): ${m.description} - ${m.calories}kcal`).join('\n');
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an AI nutrition and meal consultant for 'Lunch Box'. 
      Our mission is providing healthy, home-cooked Indian meals by local Kudumbashree female chefs.
      
      Available Menu for today:
      ${mealContext}
      
      User's question/craving: ${userPrompt}
      User's dietary preference: ${preferences.dietaryPreference}
      User's allergies: ${preferences.allergies.join(', ') || 'None'}
      
      Provide a personalized, warm, and helpful recommendation. Highlight health benefits and the homely touch. Keep it concise.`,
    });

    // Directly accessing the .text property from GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again or browse our menu!";
  }
}
