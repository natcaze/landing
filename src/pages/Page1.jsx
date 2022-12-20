import React from "react";
import { Link } from "react-router-dom"; 

import question1of3 from "../assets/question1of3.png";
import grayMan from "../assets/grayMan.png";
import blonde from "../assets/blonde.png";
import minions from "../assets/minions.png";

function Page1() {
  return (
    <div>
      <div className="question">
        <img src={question1of3} alt="question1of3" />
      </div>

      <h2> Choose one of the three movies </h2>

      <div className="movies">
        <Link to="/page2" className="effect">
          <img src={grayMan} alt="grayMan" />
        </Link>

        <Link to="/page2" className="effect">
          <img src={blonde} alt="blonde" />
        </Link>

        <Link to="/page2" className="effect">
          <img src={minions} alt="minions" />
        </Link>
      </div>
    </div>
  );
}

export default Page1;
