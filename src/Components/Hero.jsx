import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <div className="text-center h-[85vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl drop-shadow-lg">
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
      <Link
        to="/input"
        className="group mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-evenly space-x-2 gap-2 "
      >
        Start Building
        <ArrowRight size={24} />
      </Link>
    </div>
  );
};
export default Hero;
