import React, { useState } from "react";

function WorkoutGenerator() {
  const exercises = [
    { name: "Push-ups", duration: { easy: "20 sec", medium: "30 sec", hard: "45 sec" } },
    { name: "Squats", duration: { easy: "20 sec", medium: "30 sec", hard: "45 sec" } },
    { name: "Burpees", duration: { easy: "10 sec", medium: "20 sec", hard: "30 sec" } },
    { name: "Plank", duration: { easy: "15 sec", medium: "30 sec", hard: "60 sec" } },
    { name: "Jumping Jacks", duration: { easy: "20 sec", medium: "30 sec", hard: "45 sec" } },
  ];

  const [workout, setWorkout] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");

  const generateWorkout = () => {
    const randomExercises = Array.from({ length: 5 }, () =>
      exercises[Math.floor(Math.random() * exercises.length)]
    );
    setWorkout(randomExercises);
  };

  const resetWorkout = () => {
    setWorkout([]);
  };

  return (

<div>
  <img src="src\Images\pic2.jpg" className="w-290 h-100 mt-25 ml-5 rounded-2xl " />
      <div className="mt-12 ml-5 shadow-xl rounded-sm w-290 h-30">
<h1 className="font-semibold text-xl font-sans">Incase it's your first time starting this Fitness journey, It is our pleasure to introduce to you the Workout Generator below which will give you random Exercises depending on your level of difficulty. As you advance the workouts might become easy hence forcing you to change the level of difficulty.We hope the workouts we have recommended  will be useful.  </h1>
      </div>
    <div className="p-4 mt-10 border-2 w-150 rounded-xl ml-80 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Workout Generator</h1>
      <div className="mb-4">
        <label className="mr-8 text-center">Select Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="mb-4">
        <button
          onClick={generateWorkout}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-orange-500 mr-2"
        >
          Generate Workout
        </button>
        <button
          onClick={resetWorkout}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
      <ul className="mt-4">
        {workout.map((exercise, index) => (
          <li key={index} className="text-lg mb-2">
            {index + 1}. {exercise.name} - {exercise.duration[difficulty]}
          </li>
        ))}
      </ul>
    </div>
 </div>
  );
}

export default WorkoutGenerator;
