// import { useEffect, useState } from "react";
// import { Typewriter } from "react-simple-typewriter";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link } from "react-router-dom";

// const Landing = () => {
//   const colors = [
//     "rgb(239, 68, 68)",
//     "rgb(59, 130, 246)",
//     "rgb(34, 197, 94)",
//     "rgb(250, 204, 21)",
//   ];
//   const [borderColor, setBorderColor] = useState(colors[0]);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % colors.length;
//       setBorderColor(colors[index]);
//     }, 500);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="text-center h-[85vh] flex flex-col justify-center items-center">
//       <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl drop-shadow-lg">
//         <span className="text-red-500">AI</span>{" "}
//         <span className="text-blue-500">Based</span>{" "}
//         <span className="text-green-500">Resume</span>{" "}
//         <span className="text-yellow-500">Builder</span>
//         <br />
//       </h1>
//       <div className="text-gray-500 text-5xl font-semibold tracking-tight">
//         <Typewriter
//           words={["Google Developers Groups", "On campus IARE"]}
//           loop={false}
//           typeSpeed={100}
//           cursor
//         />
//       </div>
//       <Link
//         to="/input"
//         className="mt-6 px-8 py-3 text-xl font-semibold text-gray-900 rounded-full transition-all hover:scale-105"
//         style={{
//           backdropFilter: "blur(10px)",
//           backgroundColor: "rgba(255, 255, 255, 0.2)",
//           borderWidth: "4px",
//           borderStyle: "solid",
//           borderColor: borderColor,
//           transition: "border-color 0.5s ease-in-out",
//         }}
//       >
//         Start Now <i className="fa-solid fa-arrow-right"></i>
//       </Link>
//     </div>
//   );
// };
// export default Landing;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  const colors = ["#00FFAA", "#00BFFF", "#FF5050", "#FFD000"];
  const textOptions = ["Effortless.", "Smart.", "Beautiful."];
  const [borderColor, setBorderColor] = useState(colors[0]);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setBorderColor(colors[index]);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textOptions.length);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-white px-6"
      variants={fadeInUp}
    >
      {/* Hero Section */}
      <motion.div variants={fadeInUp} className="text-center max-w-3xl">
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-200"
        >
          AI-Powered{" "}
          <span className="text-gray-500 hover:text-teal-400 hover:drop-shadow-[0_0_10px_rgba(45,212,191,0.8)] duration-300 ease-in-out">
            Resume
          </span>{" "}
          Builder
        </motion.h1>
        <p className="text-lg text-gray-400 mt-4">
          Create professional resumes in seconds using AI. Simple, fast, and
          effective.
        </p>

        {/* Smooth Text Transition Effect */}
        <motion.div
          key={textIndex}
          className="text-xl sm:text-2xl font-medium mt-6 text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {textOptions[textIndex]}
        </motion.div>

        {/* Static Button with Smooth Hover Effect */}
        <Link
          to="/input"
          className="mt-8 inline-flex items-center gap-2 px-10 py-4 text-lg font-semibold rounded-full bg-gray-800 border-2 border-gray-600 text-gray-300 transition-all relative group duration-300 ease-in-out"
        >
          Start Now <ArrowRight size={22} />
          {/* Hover Effect (Glowing Border & Soft Scaling) */}
          <span className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-teal-400 transition-all duration-300"></span>
          <span className="absolute inset-0 rounded-full bg-teal-400 opacity-0 group-hover:opacity-10 transition-all duration-300"></span>
          <span className="absolute inset-0 rounded-full blur-xl bg-teal-400 opacity-0 group-hover:opacity-20 transition-all duration-300"></span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
