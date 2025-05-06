import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
function App() {

  return (
    <>
    <Navbar/>
      <div className="main">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
      </div>
    </>
  )
}

export default App
