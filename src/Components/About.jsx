import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStack = [
  { name: "React", image: "https://skillicons.dev/icons?i=react&theme=light" },
  { name: "Vite", image: "https://skillicons.dev/icons?i=vite&theme=light" },
  { name: "Tailwind CSS", image: "https://skillicons.dev/icons?i=tailwind&theme=light" },
  { name: "JavaScript", image: "https://skillicons.dev/icons?i=javascript&theme=light" },
  { name: "Gemini API", image: "./images/gemini-icon.svg" },
  { name: "Vercel", image: "https://skillicons.dev/icons?i=vercel&theme=light" },
];

const testimonials = [
  {
    text: "AI Resume Builder transformed my job search! The AI suggestions helped me land my dream job faster. Highly recommended!",
    author: "- A Satisfied User",
  },
  {
    text: "This tool made resume-building effortless! The suggestions were spot on, and the final result looked so professional.",
    author: "- Another Happy User",
  },
  {
    text: "I struggled with my resume for weeks until I found AI Resume Builder. It simplified everything and got me noticed by recruiters!",
    author: "- A Grateful Job Seeker",
  },
];

export default function About() {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="px-8 py-16 max-w-7xl mx-auto px-8 py-16 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="font-semibold tracking-tight text-center text-5xl font-extrabold mb-5 text-blue-700 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Elevate Your Career with AI Resume Builder
      </motion.h1>
      
      <motion.p 
        className="text-lg text-gray-800 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Craft professional, ATS-optimized resumes effortlessly. Leverage AI-powered suggestions, customizable templates, and real-time feedback to stand out in your job search.
      </motion.p>
      
      {/* Interactive Counter */}
      <div className="text-center my-7">
        <h2 className="text-3xl font-semibold mb-2 text-gray-900">Our Impact</h2>
        <div className="flex justify-center gap-12 text-2xl font-bold">
          <div>
            <CountUp end={120} duration={5} />+<p className="text-lg text-gray-600">Resumes Generated</p>
          </div>
          <div>
            <CountUp end={15} duration={5} />+<p className="text-lg text-gray-600">Users Benefited</p>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <section className="mb-6">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Why Choose Us?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["AI-driven resume generation", "Tailored industry-specific suggestions", "ATS-friendly formatting", "Instant customization", "One-click PDF & Doc export", "User-friendly experience"].map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center text-lg text-gray-900 bg-white p-6 rounded-lg shadow-lg border-l-4"
              style={{ borderColor: "rgb(239, 68, 68)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FaCheckCircle className="text-green-500 mr-3 text-2xl" /> {feature}
            </motion.li>
          ))}
        </ul>
      </section>
      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">How It Works</h2>
          <ol className="list-decimal list-inside text-lg text-gray-900 space-y-4">
            {["Enter your details and preferences.","AI generates an optimized resume instantly.","Customize using templates and expert recommendations.","Download and apply with confidence!"].map((step, index) => (
              <motion.li 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-l-4 border-blue-500"
                style={{ borderColor: "rgb(59, 130, 246)" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </div>

        
        <div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Tech Behind the Magic</h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-l-4 flex flex-col items-center"
            style={{ borderColor: "rgb(34, 197, 94)" }}
          >
            <img src={tech.image} alt={tech.name} className="w-16 h-16 mb-1" />
            <p className="text-center font-medium">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
      </section>

      {/* Existing & Upcoming Projects */}
      <section className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
  <h2 className="text-3xl font-semibold mb-6 text-gray-900">Stay Connected</h2>
  <div className="grid grid-cols-1 gap-6">
    <a 
      href="https://gdg.community.dev/gdg-on-campus-institute-of-aeronautical-engineering-hyderabad-india/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-l-4 text-center font-semibold text-lg text-gray-900 flex items-center justify-center gap-2"
      style={{ borderColor: "rgb(250, 204, 21)" }}
    >
      Join Us or Know more!
      <i className="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
    <a 
      href="https://bento.me/gdgc24" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-l-4 text-center font-semibold text-lg text-gray-900 flex items-center justify-center gap-2"
      style={{ borderColor: "rgb(250, 204, 21)" }}
    >
      Core Team(2024-2025) 
      <i className="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
    <a 
      href="https://gdgcblog.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ borderColor: "rgb(250, 204, 21)" }}
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 border-l-4 text-center font-semibold text-lg text-gray-900 flex items-center justify-center gap-2"
    >
      Explore our blogs!
      <i className="fa-solid fa-arrow-up-right-from-square"></i>
    </a>
  </div>
</div>
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Upcoming Projects</h2>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg animate-pulse border-l-4 mb-5"
          style={{ borderColor: "rgb(239, 68, 68)" }}>
            Events Management Portal (Coming Soon)
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg animate-pulse border-l-4 mb-5 border-red-500">
            AI-Powered Career Advisor (Coming Soon)
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-lg animate-pulse border-l-4 mb-5 border-red-500">
            AI-Powered Career Advisor (Coming Soon)
          </motion.div>
        </div>
      </section>
      {/* User Testimonials */}
      <div className="my-6 text-center">
  <h2 className="text-3xl font-semibold mb-6 text-gray-900">What Users Say</h2>
  <div className="relative max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg italic text-gray-700">
    <motion.div
      key={index} 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      "{testimonials[index].text}"
    </motion.div>
    <p className="mt-4 font-bold">{testimonials[index].author}</p>
  </div>
</div>

      
      {/* Meet the Developers */}
      <div className="text-center mt-6">
  <h2 className="text-3xl font-semibold mb-6 text-gray-900">Meet the Developers</h2>
  <motion.div className="flex justify-center items-center gap-12">
    {[
      { name: "Vishwanath", img: "./images/vishwa.jpg", link: "https://vishureddy.vercel.app" },
      { name: "Sai Kiran", img: "./images/sai_kiran.jpg", link: "https://saikiran-dev.vercel.app" }
    ].map((dev, index) => (
      <div key={index} className="text-center">
        <a 
          href={dev.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <div
            className="w-32 h-32 rounded-full shadow-xl p-1 relative"
            style={{
              background: "linear-gradient(90deg, rgb(239, 68, 68), rgb(250, 204, 21), rgb(34, 197, 94), rgb(59, 130, 246))",
              padding: "5px",
              borderRadius: "50%",
            }}
          >
            <div className="w-full h-full rounded-full bg-white overflow-hidden">
              <img 
                src={dev.img} 
                alt={dev.name} 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900 hover:text-blue-500 transition">
            {dev.name}
          </p>
        </a>
      </div>
    ))}
  </motion.div>
</div>
    </motion.div>
  );
}
