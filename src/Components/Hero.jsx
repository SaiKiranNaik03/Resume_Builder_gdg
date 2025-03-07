import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div className="text-center h-[85vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl drop-shadow-lg">
        <br />
        <span className="text-red-500">AI</span>{" "}
        <span className="text-blue-500">Based</span>{" "}
        <span className="text-green-500">Resume</span>{" "}
        <span className="text-yellow-500">Builder</span>
        <br />
      </h1>
      <div className="text-gray-500 text-5xl font-semibold tracking-tight">
        <Typewriter
          words={["Google Developers Groups", "On campus IARE"]}
          loop={false}
          typeSpeed={100}
          cursor
        />
      </div>
    </div>
  );
};
export default Hero;
