import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
 
const Navigations = () => {
  return (
    <div>
        <HashRouter>
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </HashRouter>
    </div>
  )
}

export default Navigations;
