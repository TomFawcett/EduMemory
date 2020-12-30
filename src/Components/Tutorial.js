import React from "react";
import logo from "../icons/EduLogo.ico";

const Tutorial = () => {
  return (
    <div className="tutorial">
      <h1>EduMemory</h1>
      <img alt="EduMemory logo" src={logo}></img>
      <div className="main-body">
        <h2>How do you play?</h2>
        <p>
          When you press play you will get 24 cards face down. <br /> Take a
          wild guess! Click on any card and make sure to remember what is on the
          other side of the card. <br /> Each card has a pair that goes with it,
          try to flip both cards in one turn. <br /> You will also have a
          scoreboard that will count your amount of turns and your amount of
          points.
        </p>
      </div>
    </div>
  );
};

export default Tutorial;