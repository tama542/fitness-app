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
    <div className="p-4 mt-30 border-2 w-100 rounded-xl ml-40  ">
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
  );
}

export default WorkoutGenerator;
