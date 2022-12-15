import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css';

function App() {
  return  <Router>  
  <nav className='box'>

  <h3 className='linkTitle'>GIOVE</h3>

  <div className='linkBox'> 
    <Link to="/" className='link'>Home</Link>
    <Link to="/about" className='link'>About</Link>
    <Link to="/contact" className='link'>Contact us</Link>
    </div>
    
   </nav>
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </Router>
}

export default App;
