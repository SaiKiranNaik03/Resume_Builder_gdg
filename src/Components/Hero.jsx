import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";
// import logo from "./images/logo.png";

const Hero = () => {
  const colors = ["rgb(239, 68, 68)", "rgb(59, 130, 246)", "rgb(34, 197, 94)", "rgb(250, 204, 21)"];
  const [borderColor, setBorderColor] = useState(colors[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setBorderColor(colors[index]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center h-[87vh] flex flex-col justify-center items-center">
      <div><img src="/images/logo.png" alt="Logo" className="w-35 h-35 rounded-full" /></div>
      <div className="text-gray-500 text-5xl font-semibold tracking-tight">
        <Typewriter
          words={["Google Developer Groups", "On Campus IARE"]}
          loop={true} 
          typeSpeed={100} 
          deleteSpeed={50} 
          delaySpeed={200} 
          cursor
        />
      </div>
      <h1 className="font-semibold tracking-tight text-balance sm:text-7xl drop-shadow-lg">
        <span className="text-red-500">AI</span>{" "}
        <span className="text-blue-500">Based</span>{" "}
        <span className="text-green-500">Resume</span>{" "}
        <span className="text-yellow-500">Builder</span>
        <br />
      </h1>
      

      <Link
        to="/input"
        className="mt-6 px-8 py-3 text-xl font-semibold text-gray-900 rounded-full transition-all hover:scale-105"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderWidth: "4px",
          borderStyle: "solid",
          borderColor: borderColor,
          transition: "border-color 0.5s ease-in-out",
        }}
      >
        Start Now <i class="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
};

export default Hero;
