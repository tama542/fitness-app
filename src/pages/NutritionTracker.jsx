import React, { useState } from "react";

function NutritionTracker() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState({ name: "", calories: "", protein: "", carbs: "", fats: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeal({ ...meal, [name]: value });
  };

  const addMeal = (e) => {
    e.preventDefault();
    if (meal.name && meal.calories && meal.protein && meal.carbs && meal.fats) {
      setMeals([...meals, meal]);
      setMeal({ name: "", calories: "", protein: "", carbs: "", fats: "" });
    }
  };

  const calculateTotal = (key) => {
    return meals.reduce((total, item) => total + Number(item[key]), 0);
  };

  return (
  
   
    <div className="max-w-lg mx-auto p-5 border rounded-lg shadow-lg bg-gray-50 mt-25 ml-5">
      <h1 className="text-2xl font-bold text-center mb-5">Nutrition Tracker</h1>
      <form className="space-y-4" onSubmit={addMeal}>
        <input
          type="text"
          name="name"
          placeholder="Meal Name"
          value={meal.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="calories"
          placeholder="Calories"
          value={meal.calories}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="protein"
          placeholder="Protein (g)"
          value={meal.protein}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="carbs"
          placeholder="Carbs (g)"
          value={meal.carbs}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="fats"
          placeholder="Fats (g)"
          value={meal.fats}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> 
  
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-orange-500 transition"
        >
          Add Meal
        </button>

      </form>
    
      <div className="mt-5 border rounded text-center">
        <h2 className="text-xl font-semibold mb-3">Daily Summary</h2>
        <ul className="space-y-2">
          {meals.map((item, index) => (
            <li key={index} className="p-3 border border-gray-200 rounded-md shadow-sm bg-white">
              {item.name}: {item.calories} calories, {item.protein}g protein, {item.carbs}g carbs, {item.fats}g fats
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p>Total Calories: {calculateTotal("calories")} kcal</p>
          <p>Total Protein: {calculateTotal("protein")} g</p>
          <p>Total Carbs: {calculateTotal("carbs")} g</p>
          <p>Total Fats: {calculateTotal("fats")} g</p>
        </div>
      </div>
      </div>

  );
}

export default NutritionTracker;
