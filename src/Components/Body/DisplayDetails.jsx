import React, { useEffect, useState, useRef, useContext } from "react";

import { updateScore } from "../../JS/updateScore";
import { ScoreContext } from "../../App.jsx";

const DisplayDetails = ({
  personMoveImg,
  computerMoveImg,
  personMove,
  computerMove,
  setPickMove,
  result,
}) => {
  const [load, setLoad] = useState(false);
  const [disRes, setDisRes] = useState(false);
  const { setScore } = useContext(ScoreContext);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      setTimeout(() => {
        setLoad(true);
        console.log("no");
      }, 500);
      setTimeout(() => {
        setDisRes(true);
        setScore((currScore) => currScore + updateScore(result));
      }, 700);
    }
  }, [setScore, result]);
  return (
    <div className="moves-display">
      <div className="btn-display">
        <div className="player-move">
          <h3>You Picked</h3>
          <div className={`moves-btn ${personMove}-border`}>
            <img src={personMoveImg} alt="" />
          </div>
        </div>
        {disRes ? (
          <div className="res-display">
            <h1>{result}</h1>
            <button
              className="reset-btn"
              type="button"
              onClick={() => {
                setPickMove(false);
              }}
            >
              Play Again
            </button>
          </div>
        ) : (
          ""
        )}
        <div className="player-move">
          <h3>The House Picked</h3>
          {load ? (
            <>
              {" "}
              <div className={`moves-btn ${computerMove}-border`}>
                <img src={computerMoveImg} alt="" />
              </div>
            </>
          ) : (
            <div className="black-box"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayDetails;
