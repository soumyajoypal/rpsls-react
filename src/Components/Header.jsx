import React, { useContext } from "react";
import { ScoreContext } from "../App";
const Header = () => {
  const { score } = useContext(ScoreContext);
  return (
    <div className="header-container">
      <div className="title">
          <span>ROCK</span>
          <span>paper</span>
          <span>Scissors</span>
          <span>Lizard</span>
          <span>Spock</span>
      </div>
      <div className="score-card">
        <p>SCORE</p>
        <h2>{score}</h2>
      </div>
    </div>
  );
};

export default Header;
