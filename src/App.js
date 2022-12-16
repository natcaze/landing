import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import logo from "../src/assets/logo.png";

import Page1 from "./pages/Page1";  
import Page2 from "./pages/Page2";  
import Page3 from "./pages/Page3";  


function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
