import React from "react";

import question1of3 from "../assets/question1of3.png";
import grayMan from "../assets/grayMan.png";
import blonde from "../assets/blonde.png";
import minions from "../assets/minions.png";

function Page1() {
  return (
    <div>
      <img src={question1of3} alt="question1of3" />
      <h2> Choose one of the three movies </h2>
      <img src={grayMan} alt="grayMan" />
      <img src={blonde} alt="blonde" />
      <img src={minions} alt="minions" />
    </div>
  );
}

export default Page1;
