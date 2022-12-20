import React from "react";
import { Link } from "react-router-dom"; 

import question2of3 from "../assets/question2of3.png";
import maverick from "../assets/maverick.png";
import bulletTrain from "../assets/bulletTrain.png";
import thor from "../assets/thor.png";

function Page2() {
  return (
    <div>
      <div className="question">
        <img src={question2of3} alt="question2of3" />
      </div>

      <h2> Choose one of the three movies </h2>

      <div className="movies">
        <Link to="/page3" className="effect">
          <img src={maverick} alt="maverick" />
        </Link>
        <Link to="/page3" className="effect">
          <img src={bulletTrain} alt="bulletTrain" />
        </Link>
        <Link to="/page3" className="effect">
          <img src={thor} alt="thor" />
        </Link>
      </div>
    </div>
  );
}

export default Page2;
