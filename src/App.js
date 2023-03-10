import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import logo from "../src/assets/logo.png";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import WatchNow from "./pages/WatchNow";

function App() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/watchnow" element={<WatchNow />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
