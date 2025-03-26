import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Workout from './pages/Workout'

import NutritionTracker from './pages/NutritionTracker'

import HomePage from './pages/HomePage'
import Work from './Work'
import WorkoutGenerator from './pages/WorkoutGen'
import ContactForm from './pages/Contact'



function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
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
  )
}

export default App