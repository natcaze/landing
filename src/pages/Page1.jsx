import React from "react";
import { Link } from "react-router-dom"; 

import question1of3 from "../assets/question1of3.png";
import grayMan from "../assets/grayMan.png";
import blonde from "../assets/blonde.png";
import minions from "../assets/minions.png";

function Page1() {
  return (
    <div>
      <img src={question1of3} alt="question1of3" />
      <h2> Choose one of the three movies </h2>
      <Link to="/page2">
        <img src={grayMan} alt="grayMan" />
      </Link>
      <Link to="/page2">
        <img src={blonde} alt="blonde" />
      </Link>
      <Link to="/page2">
        <img src={minions} alt="minions" />
      </Link>
    </div>
  );
}

export default Page1;
