import { Routes, Route } from "react-router-dom";
import Home from "./Home/index";
import Service from "./Home/Services/index";
import Contact from "./Home/Contact";


function App() {

  return (
    <div className="App scroll-smooth duration-300 overflow-hidden">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/services" element={ <Service/> } />
          <Route path="/contact-us" element={ <Contact/> } />

        </Routes>
    </div>
  )
}

export default App
                  