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

    <div>
<img src="./Images/nut1.jpg" className=" mt-24  rounded-2xl w-screen  object-cover  max-w-full h-auto" />
      <div className="mt-12 ml-5 shadow-xl rounded-sm w-320 h-30">
<h1 className="font-semibold  font-sans text-xl">Here we have the Nutrition-tracker.As we all know in your fitness journey you need to eat a healthy diet depending on the goal you have.This nutrition-tracker helps you to see the amount of carbs,proteins etc. you have taken depending on the type of food you eat.After every meal the user is required to fill in the data below and at the end of the day they will get a summary. Remember, there is no progress you will make in your fitness journey Without eating healthy.</h1>
      </div>
   
    <div className="max-w-lg mx-auto p-5 border rounded-lg shadow-lg bg-gray-50 mt-10 ">
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
      </div>

  );
}

export default NutritionTracker;
