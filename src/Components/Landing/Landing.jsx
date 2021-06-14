import React from "react";
import "./Landing.css";
import img from "./../../Assets/logo.png";
import Typewriter from 'typewriter-effect';

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <h1 className="landing-header">Can you type...</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast?", "Accurate?", "Correct?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing-right">
        <img src={img} alt="Logo image" className="main-image" />
      </div>
    </div>
  );
};

export default Landing;
