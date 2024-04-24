import React, { useState } from "react";
import scissors_svg from "../../assets/images/icon-scissors.svg";
import paper_svg from "../../assets/images/icon-paper.svg";
import rock_svg from "../../assets/images/icon-rock.svg";
import lizard_svg from "../../assets/images/icon-lizard.svg";
import spock_svg from "../../assets/images/icon-spock.svg";
import pentagon_svg from "../../assets/images/bg-pentagon.svg";
import Rules from "../Rules.jsx";
import computerMoves from "../../JS/computerMoves";
import { check } from "../../JS/checkCondition";

import DisplayDetails from "./DisplayDetails.jsx";

const moveMap = {
  scissors: scissors_svg,
  paper: paper_svg,
  rock: rock_svg,
  lizard: lizard_svg,
  spock: spock_svg,
};

const Body = () => {
  const [toggle, setToggle] = useState(false);
  const [pickMove, setPickMove] = useState(false);
  const [gameState, setGameState] = useState({
    personMove: null,
    computerMove: null,
    result: null,
  });

  const playerMove = (move) => {
    setPickMove(true);
    const compMove = computerMoves();
    setGameState({
      ...gameState,
      personMove: move,
      computerMove: compMove,
      result: check(move, compMove),
    });
  };

  return (
    <>
      {pickMove ? (
        <DisplayDetails
          personMoveImg={moveMap[gameState.personMove]}
          computerMoveImg={moveMap[gameState.computerMove]}
          personMove={gameState.personMove}
          computerMove={gameState.computerMove}
          setPickMove={setPickMove}
          result={gameState.result}
        />
      ) : (
        <div className="play-area">
          <img src={pentagon_svg} alt="" className="pentagon-img" />
          <Buttons
            img={scissors_svg}
            move={"scissors"}
            playerMove={playerMove}
          />
          <Buttons img={paper_svg} move={"paper"} playerMove={playerMove} />
          <Buttons img={rock_svg} move={"rock"} playerMove={playerMove} />
          <Buttons img={lizard_svg} move={"lizard"} playerMove={playerMove} />
          <Buttons img={spock_svg} move={"spock"} playerMove={playerMove} />
        </div>
      )}
      <button
        type="button"
        className="rules-btn"
        onClick={() => {
          setToggle(true);
        }}
      >
        Rules
      </button>
      {toggle && <Rules setToggle={setToggle} />}
    </>
  );
};

const Buttons = ({ img, move, playerMove }) => {
  return (
    <div
      className={`player-button ${move}-border`}
      onClick={playerMove ? () => playerMove(move) : null}
      id={move}
    >
      <img src={img} alt={move} />
    </div>
  );
};

export { Buttons };
export default Body;
