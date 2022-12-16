import React from "react";

import question3of3 from "../assets/question3of3.png";
import batman from "../assets/batman.png";
import spiderman from "../assets/spiderman.png";
import flash from "../assets/flash.png";

function Page3() {
  return (
    <div>
      <img src={question3of3} alt="question3of3" />
      <h2> Choose one of the three movies </h2>
      <img src={batman} alt="batman" />
      <img src={spiderman} alt="spiderman" />
      <img src={flash} alt="flash" />
    </div>
  );
}

export default Page3;
