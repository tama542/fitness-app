import React, { useState } from "react";

function HomePage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
      categorizeBMI(bmiValue);
    }
  };

  const categorizeBMI = (bmiValue) => {
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  return (

  <div>
   
<div>
<h1 className=" ml-70 text-orange-500 text-7xl absolute flex items-center justify-center mt-60 font-bold left-50 sm:text-3xl md:text-5xl lg:text-7xl text-center ">MY FITNESS!</h1>
<p className="text-white absolute flex items-center justify-center mt-80 font-bold left-130 text-5xl sm:text-lg md:text-xl lg:text-5xl ">Stay Healthy And Fit.</p>
<button 
onClick={() => navigate("/LoginForm")}
className="bg-amber-500 text-white absolute flex items-left justify-center mt-100   px-4 py-2 font-semibold  w-70 rounded-md hover:bg-white transition hover:text-black align-center ml-140  ">Join Now!</button>


<img src="/public/Images/main.jpg" className=" w-screen  object-cover mt-10 max-w-full h-auto" />
</div>

<div>
  <section className="rounded-sm shadow-xl  p-3 w-330 h-50 ml-5">
    <h1 className="text-center font-serif underline font-bold text-xl">HOME</h1>
    <h3 className="font-semibold p-3 text-xl ">Welcome to Pump Fitness, Your journey to a healthier, stronger, and more confident you starts here! At Pump Fitness, we’re dedicated to providing expert guidance, personalized plans, and a supportive community to help you crush your fitness goals. Whether you're just beginning or pushing your limits, we’re here every step of the way to inspire, motivate, and empower you.To get started let us measure your BMI to know your health status.</h3>
   
  </section>
</div>




    <div className="max-w-md mx-auto p-7 border rounded-lg shadow-lg bg-gray-50 mt-10 ">
      <h1 className="text-2xl font-bold text-center mb-5">BMI Calculator</h1>
      <div className="space-y-4">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <button
          onClick={calculateBMI}
          className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Calculate BMI
        </button>
      </div>
      {bmi && (
        <div className="mt-5 text-center">
          <p className="text-xl font-semibold">
            Your BMI: <span className="text-green-600">{bmi}</span>
          </p>
          <p className="text-lg">{category}</p>
        </div>
      )}
    </div>
    {/* <div className="w-80 m-10">
      <img src="src\Images\pic1.jpg"  className="rounded-xl"/>
      <img src="src\Images\pic2.jpg" className="rounded-xl" />
      <img src="src\Images\pic3.jpg" className="rounded-xl" />
      <img src="src\Images\pic4.jpg" className="rounded-xl" />
    </div> */}

<div className="justify-end flex">
  <button
  onClick={() => navigate("/loginForm")}
    type="submit"

  className="w-50 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-30  "
          >
            Log out
    
  </button>
</div>
    </div>
   
   
  );
}







export default HomePage;
