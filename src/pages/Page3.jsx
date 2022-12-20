import React from "react";
import { Link } from "react-router-dom"; 

import question3of3 from "../assets/question3of3.png";
import batman from "../assets/batman.png";
import spiderman from "../assets/spiderman.png";
import flash from "../assets/flash.png";

function Page3() {
  return (
    <div>
      <div className="question">
        <img src={question3of3} alt="question3of3" />
      </div>

      <h2> Choose one of the three movies </h2>

      <div className="movies">
        <Link to="/WatchNow">
          <img src={batman} alt="batman" />
        </Link>
        <Link to="/WatchNow">
          <img src={spiderman} alt="spiderman" />
        </Link>
        <Link to="/WatchNow">
          <img src={flash} alt="flash" />
        </Link>
        
      </div>
    </div>
  );
}

export default Page3;
