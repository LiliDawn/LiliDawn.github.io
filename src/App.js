/* Lilian Wakely - 301390134
  September 27th, 2024
*/

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import AboutPage from "./Pages/Home/AboutPage";
import SkillPage from "./Pages/Home/SkillPage";
import PortfolioPage from "./Pages/Home/PortfolioPage";
import ContactPage from "./Pages/Home/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="home" element={<Home />} /> {/* Home route */}
            <Route path="about" element={<AboutPage />} /> {/* About Page route */}
            <Route path="skill" element={<SkillPage />} />
            <Route path="portfolio" element={<PortfolioPage/>} />
            <Route path="contact" element={<ContactPage/>} />
            <Route path="*" element={<div>404 Not Found</div>} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
