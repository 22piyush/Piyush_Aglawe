import React from 'react'
import "./App.css";
import Navbar from './component/Navbar/Navbar';
import Home from './view/Home/Home';
import About from './view/About/About';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App