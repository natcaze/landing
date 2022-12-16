import React from "react";
import { Link } from "react-router-dom"; 

import question2of3 from "../assets/question2of3.png";
import maverick from "../assets/maverick.png";
import bulletTrain from "../assets/bulletTrain.png";
import thor from "../assets/thor.png";

function Page1() {
  return (
    <div>
      <img src={question2of3} alt="question1of3" />
      <h2> Choose one of the three movies </h2>
      <Link to="/page3">
        <img src={maverick} alt="maverick" />
      </Link>
      <Link to="/page3">
        <img src={bulletTrain} alt="bulletTrain" />
      </Link>
      <Link to="/page3">
        <img src={thor} alt="thor" />
      </Link>
    </div>
  );
}

export default Page1;
