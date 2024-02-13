import React from "react";

const Heading = ({ text, color }) => {
  return (
    <h1
      style={{
        color: { color },
      }}
    >
      {text}
    </h1>
  );
};

export default Heading;
