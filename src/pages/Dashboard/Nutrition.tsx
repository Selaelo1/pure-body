import React from "react";
import { Utensils, Clock, Users } from "lucide-react";

const Nutrition = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Nutrition</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.title}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {recipe.prepTime}
                </span>
                <span className="flex items-center">
                  <Utensils className="h-4 w-4 mr-1" />
                  {recipe.calories} cal
                </span>
                <span className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {recipe.servings} servings
                </span>
              </div>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const recipes = [
  {
    title: "Protein-Packed Buddha Bowl",
    description:
      "A nutritious bowl filled with quinoa, chickpeas, and fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    prepTime: "25 mins",
    calories: "450",
    servings: "2",
  },
  {
    title: "Green Smoothie Bowl",
    description:
      "Start your day with this nutrient-rich smoothie bowl topped with fresh fruits.",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80",
    prepTime: "10 mins",
    calories: "280",
    servings: "1",
  },
  {
    title: "Grilled Chicken Salad",
    description:
      "Lean protein with mixed greens and light vinaigrette dressing.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
    prepTime: "20 mins",
    calories: "350",
    servings: "1",
  },
];

export default Nutrition;
