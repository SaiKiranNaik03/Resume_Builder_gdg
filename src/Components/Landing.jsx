import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button.jsx";
import { LineShadowText } from "./magicui/line-shadow-text.jsx";
import { BoxReveal } from "./magicui/box-reveal.jsx";
import { TypingAnimation } from "./magicui/typing-animation.jsx";
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
        <BoxReveal boxColor="transparent" duration={0.5}>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-200"
          >
            AI-Powered{" "}
            <LineShadowText
              shadowColor="white" // teal-500 color
              className="text-gray-300 hover:text-teal-400 transition-colors duration-300 italic"
            >
              Resume
            </LineShadowText>{" "}
            Builder
          </motion.h1>
        </BoxReveal>
        <p className="text-xs text-gray-400">
          <TypingAnimation>
            Create professional resumes in seconds using AI. Simple, fast, and
            effective.
          </TypingAnimation>
        </p>

        {/* Smooth Text Transition Effect */}
        <motion.div
          key={textIndex}
          className="text-xl sm:text-2xl font-medium  text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {textOptions[textIndex]}
        </motion.div>

        {/* Static Button with Smooth Hover Effect */}
        <Link to="/input">
          <InteractiveHoverButton className="mt-5 text-black">
            Start Now{" "}
          </InteractiveHoverButton>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
