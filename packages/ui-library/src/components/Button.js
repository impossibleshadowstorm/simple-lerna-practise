import React from "react";

const Button = ({ backgroundColor, textColor, text, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: `${backgroundColor ?? "white"}`,
        color: `${textColor ?? "black"}`,
        padding: "7.5px 20px",
        display: "inline-block",
      }}
    >
      {text}
    </div>
  );
};

export default Button;
