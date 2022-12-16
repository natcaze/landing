import "./App.css";
import React from "react";

import Footer from "./components/Footer";
import Logo from "./components/Logo";

import grayMan from "../src/assets/grayMan.png";
import blonde from "../src/assets/blonde.png";
import minions from "../src/assets/minions.png";
import question1of3 from "../src/assets/question1of3.png";

function App() {
  return (
    <div className="App">
      <Logo />
      <img src={question1of3} alt="question1of3" />
      <h2> Choose one of the three movies </h2>
      <img src={grayMan} alt="grayMan" />
      <img src={blonde} alt="blonde" />
      <img src={minions} alt="minions" />
      <Footer />
    </div>
  );
}

export default App;
