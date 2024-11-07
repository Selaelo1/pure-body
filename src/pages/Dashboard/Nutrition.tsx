import React, { useState } from "react";
import { Utensils, Clock, Users, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Nutrition = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

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
              <button
                onClick={() => setSelectedRecipe(recipe)}
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recipe Modal */}
      <AnimatePresence>
        {selectedRecipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRecipe(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedRecipe.title}</h2>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedRecipe.prepTime}
                  </span>
                  <span className="flex items-center">
                    <Utensils className="h-4 w-4 mr-1" />
                    {selectedRecipe.calories} cal
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {selectedRecipe.servings} servings
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="text-gray-600">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Instructions</h3>
                  <ol className="list-decimal list-inside space-y-3">
                    {selectedRecipe.instructions.map((step, index) => (
                      <li key={index} className="text-gray-600">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-lg font-semibold mb-3">Nutrition Facts</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedRecipe.nutrition).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface Nutrition {
  protein: string;
  carbs: string;
  fats: string;
  fiber: string;
}

interface Recipe {
  title: string;
  description: string;
  image: string;
  prepTime: string;
  calories: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  nutrition: Nutrition;
}

const recipes: Recipe[] = [
  {
    title: "Protein-Packed Buddha Bowl",
    description: "A nutritious bowl filled with quinoa, chickpeas, and fresh vegetables.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
    prepTime: "25 mins",
    calories: "450",
    servings: "2",
    ingredients: [
      "1 cup quinoa, rinsed",
      "1 can (15 oz) chickpeas, drained and rinsed",
      "2 cups sweet potato, cubed",
      "2 cups kale, chopped",
      "1 avocado, sliced",
      "2 tbsp olive oil",
      "1 lemon, juiced",
      "2 tbsp tahini",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook quinoa according to package instructions.",
      "Preheat oven to 400°F (200°C).",
      "Toss sweet potato cubes with 1 tbsp olive oil, salt, and pepper. Roast for 20-25 minutes.",
      "Massage kale with remaining olive oil and lemon juice.",
      "Make dressing by whisking tahini with 2 tbsp water and remaining lemon juice.",
      "Assemble bowls with quinoa, roasted sweet potatoes, chickpeas, and kale.",
      "Top with avocado slices and drizzle with tahini dressing."
    ],
    nutrition: {
      protein: "15g",
      carbs: "52g",
      fats: "18g",
      fiber: "12g"
    }
  },
  {
    title: "Green Smoothie Bowl",
    description: "Start your day with this nutrient-rich smoothie bowl topped with fresh fruits.",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80",
    prepTime: "10 mins",
    calories: "280",
    servings: "1",
    ingredients: [
      "2 cups spinach",
      "1 frozen banana",
      "1/2 cup frozen mango",
      "1 scoop vanilla protein powder",
      "1 cup almond milk",
      "1 tbsp chia seeds",
      "1/4 cup granola",
      "Fresh berries for topping"
    ],
    instructions: [
      "Blend spinach, banana, mango, protein powder, and almond milk until smooth.",
      "Pour into a bowl.",
      "Top with chia seeds, granola, and fresh berries.",
      "Serve immediately."
    ],
    nutrition: {
      protein: "20g",
      carbs: "45g",
      fats: "8g",
      fiber: "8g"
    }
  },
  {
    title: "Grilled Chicken Salad",
    description: "Lean protein with mixed greens and light vinaigrette dressing.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80",
    prepTime: "20 mins",
    calories: "350",
    servings: "1",
    ingredients: [
      "6 oz chicken breast",
      "3 cups mixed greens",
      "1/2 cup cherry tomatoes",
      "1/4 cucumber, sliced",
      "1/4 red onion, sliced",
      "2 tbsp olive oil",
      "1 tbsp balsamic vinegar",
      "1 tsp Dijon mustard",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season chicken breast with salt and pepper.",
      "Grill chicken for 6-7 minutes per side until cooked through.",
      "Whisk together olive oil, balsamic vinegar, and Dijon mustard.",
      "Toss mixed greens with tomatoes, cucumber, and red onion.",
      "Slice chicken and place on top of salad.",
      "Drizzle with vinaigrette dressing."
    ],
    nutrition: {
      protein: "35g",
      carbs: "12g",
      fats: "18g",
      fiber: "5g"
    }
  }
];

export default Nutrition;