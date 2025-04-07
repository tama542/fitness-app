import React, { useEffect, useState } from 'react'
import Axios from "axios";



import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/LoginForm';
import SignUp from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Workout from './pages/Workout'

import NutritionTracker from './pages/NutritionTracker'

import HomePage from './pages/HomePage'
import Work from './Work'
import WorkoutGenerator from './pages/WorkoutGen'
import ContactForm from './pages/Contact'

import Home from './pages/Homep';

function App(){
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/loginform" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
    //       <Route path="/signup" element={<SignUp />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Router>
         <Navbar />
         <Routes>
    <Route path="/loginform" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
    <Route path="/signup" element={<SignUp />} />
        <Route path='/signup' element ={<SignUp/>}/>
        <Route path='/loginform' element ={<Login />}/> 
       <Route path='/homep' element ={<Home />}/>  
         <Route path='/homepage' element ={<HomePage />}/>
         <Route path='/workout' element ={<Workout />}/> 
       
         <Route path='/nutritiontracker' element ={<NutritionTracker/>}/> 
         <Route path='/work' element ={<Work/>}/> 
         <Route path='/workoutgen' element ={<WorkoutGenerator/>}/> 
         <Route path='/contactform' element ={<ContactForm/>}/> 
           <Route/>
         </Routes>
         <Footer />  
       </Router>
  );
}


// function App() {
//   return (
//    <Router>
//     <Navbar />
//     <Routes>
//     <Route path='/signup' element ={<SignUp/>}/>
//     <Route path='/loginform' element ={<Login />}/> 
//     <Route path='/homep' element ={<Home />}/>  
//     <Route path='/homepage' element ={<HomePage />}/>
//     <Route path='/workout' element ={<Workout />}/> 
   
//     <Route path='/nutritiontracker' element ={<NutritionTracker/>}/> 
//     <Route path='/work' element ={<Work/>}/> 
//     <Route path='/workoutgen' element ={<WorkoutGenerator/>}/> 
//     <Route path='/contactform' element ={<ContactForm/>}/> 
//       <Route/>
//     </Routes>
//     <Footer />  
//    </Router>
//   )
// }

export default App;