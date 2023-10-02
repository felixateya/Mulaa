// import React from 'react'

// GOBAL CSS
import "./App.css";
//RESPONSIVE CSS
import "./Responsive.css";
//Page imports

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Testimonials from "./pages/Testimonials";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Introduction />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Testimonials" element={<Testimonials/>} />
        <Route path="/Contact" element={<Footer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
