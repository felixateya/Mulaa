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

import { Route, Routes, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// function App() {
//   const [step, setStep] = useState(0);

//   const routes = ["/", "/Skills", "/Projects", "/Testimonials", "/Contact"];

//   const navigate = useNavigate()

//   function handleNext() {
//     if (step < 4) setStep((s) => s + 1);
//     navigate(routes[step + 1])
//   }
//   function handlePrev() {
//     if (step > 0) setStep((s) => s - 1);
//     navigate(routes[step - 1])
//   }

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <Router>
//       <div className="btns">
//         <button onClick={handlePrev} className="previous">
//           <FaArrowLeft />
//         </button>
//         <button onClick={handleNext} className="next">
//           <FaArrowRight />
//         </button>
//       </div>
//       <Routes>
//         <Route path={routes[0]} element={<Home />} />
//         <Route path={routes[1]} element={<Introduction />} />
//         <Route path={routes[2]} element={<Projects />} />
//         <Route path={routes[3]} element={<Testimonials />} />
//         <Route path={routes[4]} element={<Footer />} />
//       </Routes>
//     </Router>
//   );
// }
function App() {
  const [step, setStep] = useState(0);
  const routes = ["/", "/Skills", "/Projects", "/Testimonials", "/Contact"];
  const navigate = useNavigate();

  function handleNext() {
    if (step < 4) {
      setStep((s) => s + 1);
      navigate(routes[step + 1]);
    }
  }

  function handlePrev() {
    if (step > 0) {
      setStep((s) => s - 1);
      navigate(routes[step - 1]);
    }
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="btns">
        <button onClick={handlePrev} className="previous">
          <FaArrowLeft />
        </button>
        <button onClick={handleNext} className="next">
          <FaArrowRight />
        </button>
      </div>
      <Routes>
        <Route path={routes[0]} element={<Home />} />
        <Route path={routes[1]} element={<Introduction />} />
        <Route path={routes[2]} element={<Projects />} />
        <Route path={routes[3]} element={<Testimonials />} />
        <Route path={routes[4]} element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
