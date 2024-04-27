import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "Competitive Programmer",
        ],
        autoStart: true,
        loop: true,
        cursor: "|",
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
