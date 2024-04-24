import React from "react";
import rules_svg from "../assets/images/image-rules-bonus.svg";
import close_svg from "../assets/images/icon-close.svg";

const Rules = ({setToggle }) => {
  return (
    <div className="rules-display">
      <div className="rules-header">
        <h2>Rules</h2>
        <button
          type="button"
          className="close-btn"
          onClick={() => {
            setToggle(false);
          }}
        >
          <img src={close_svg} alt="" />
        </button>
      </div>
      <img src={rules_svg} alt="" className="rules-img" />
    </div>
  );
};

export default Rules;
