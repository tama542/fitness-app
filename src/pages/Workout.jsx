import React, { useState } from "react";

function Workout() {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState({ type: "", duration: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const addWorkout = (e) => {
    e.preventDefault();
    if (workout.type && workout.duration) {
      setWorkouts([...workouts, workout]);
      setWorkout({ type: "", duration: "" });
    }
  };

  return (


    <section className="max-w-lg mx-auto p-5 border-1 border-green-500 rounded-lg shadow-lg bg-gray-50 mt-30">
      <h2 className="text-2xl font-bold text-center text-black-600 mb-5">Workout Log</h2>
      <form className="space-y-4" onSubmit={addWorkout}>
        <input
          type="text"
          name="type"
          placeholder="Workout Type"
          value={workout.type}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          value={workout.duration}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Add Workout
        </button>
       
      </form>
      <ul className="mt-5 space-y-2">
        {workouts.map((workout, index) => (
          <li
            key={index}
            className="p-3 border border-gray-200 rounded-md shadow-md bg-white"
          >
            {workout.type} - {workout.duration} mins
          </li>
        ))}
      </ul>
    </section>
    
  );
}



export default Workout;