import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./Home/index";
import About from "./Home/Aboutus/About"
import Why from "./Home/why/Business"
import Service from "./Home/Services/index";
import Contact from "./Home/Contact";
import Preloader from "./Home/Preload";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about-us" element={ <About/> } />
          <Route path="/why-blockSphere" element={ <Why/> } />
          <Route path="/services" element={ <Service/> } />
          <Route path="/contact-us" element={ <Contact/> } />
        </Routes>
      )}
    </>

  )
}

export default App
                  