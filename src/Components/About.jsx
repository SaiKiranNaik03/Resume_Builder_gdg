import { CheckCircle, ArrowUpRightSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/Components/ui/card.jsx";
import { Button } from "@/Components/ui/button.jsx";
import { BentoGrid, BentoCard } from "./magicui/bento-grid.jsx";
import { FileText, PenLine, Layout, Download } from "lucide-react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button.jsx";
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(target / 100);
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [target]);

  return <motion.span>{count}+</motion.span>;
};

const testimonials = [
  {
    text: "AI Resume Builder transformed my job search! The AI suggestions helped me land my dream job faster.",
    author: "— A Satisfied User",
  },
  {
    text: "The templates were so clean and professional. I got hired within weeks!",
    author: "— A Happy Job Seeker",
  },
  {
    text: "I struggled with my resume for weeks until I found this tool. It simplified everything!",
    author: "— A Grateful User",
  },
];
const developers = [
  {
    name: "Vishwanath",
    img: "/images/vishwa.jpg",
    link: "https://vishureddy.vercel.app",
  },
  {
    name: "Sai Kiran",
    img: "/images/sai_kiran.jpg",
    link: "https://saikiran-dev.vercel.app",
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="px-8 py-16 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="font-semibold text-center text-5xl font-extrabold mb-5 text-teal-400 drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Elevate Your Career with AI Resume Builder
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Craft professional, ATS-optimized resumes effortlessly with AI-powered
        suggestions and customizable templates.
      </motion.p>

      {/* Impact Counter */}
      <section className="text-center my-12">
        <h2 className="text-3xl font-semibold text-white">Our Impact</h2>
        <div className="mt-6 flex justify-center gap-12 text-2xl font-bold text-gray-300">
          <div>
            <AnimatedCounter target={120} />
            <p className="text-lg text-gray-400">Resumes Generated</p>
          </div>
          <div>
            <AnimatedCounter target={15} />
            <p className="text-lg text-gray-400">Users Benefited</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "AI-driven resume generation",
            "Industry-specific suggestions",
            "ATS-friendly formatting",
            "Instant customization",
            "One-click PDF & Doc export",
            "User-friendly experience",
          ].map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800/20 border-white/20 shadow-lg"
            >
              <CardHeader className="flex items-center">
                <CheckCircle className="h-6 w-6 text-teal-400 mr-3" />
                <h3 className="text-lg text-white">{feature}</h3>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          How It Works
        </h2>
        <BentoGrid className="px-4 md:px-8">
          <BentoCard
            name="Enter Details"
            description="Start by entering your professional details and preferences. Our AI system will guide you through the process."
            className="col-span-3 md:col-span-1 bg-gray-800/20 [&_svg]:text-teal-500"
            Icon={PenLine}
            href="/input"
            cta="Get Started"
          />
          <BentoCard
            name="AI Generation"
            description="Our advanced AI instantly generates an optimized resume tailored to your industry and experience level."
            className="col-span-3 md:col-span-1 bg-gray-800/20 [&_svg]:text-teal-500"
            Icon={FileText}
            href="https://gemini.google.com/app"
            cta="Learn More"
          />
          <BentoCard
            name="Customize Template"
            description="Choose from our professional templates and customize them with expert recommendations."
            className="col-span-3 md:col-span-1 bg-gray-800/20 [&_svg]:text-teal-500"
            Icon={Layout}
            href="/templates"
            cta="View Templates"
          />
          <BentoCard
            name="Download & Apply"
            description="Download your polished resume in multiple formats and start applying with confidence!"
            className="col-span-3 bg-gray-800/20 [&_svg]:text-teal-500"
            Icon={Download}
            href="/input"
            cta="Try Now"
          />
        </BentoGrid>
      </section>

      {/* User Testimonials */}
      <div className="my-12 text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">
          What Users Say
        </h2>
        <motion.div
          key={index}
          className="relative max-w-3xl mx-auto bg-gray-800/20 p-6 rounded-lg shadow-lg italic text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          "{testimonials[index].text}"
          <p className="mt-4 font-bold text-teal-400">
            {testimonials[index].author}
          </p>
        </motion.div>
      </div>

      {/* Stay Connected */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Stay Connected
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {[
            {
              text: "Join Us or Know More",
              link: "https://gdg.community.dev/",
              color: "yellow-400",
            },
            {
              text: "Core Team (2024-2025)",
              link: "https://bento.me/gdgc24",
              color: "yellow-400",
            },
            {
              text: "Explore Our Blogs",
              link: "https://gdgcblog.vercel.app/",
              color: "yellow-400",
            },
          ].map((item, index) => (
            <InteractiveHoverButton
              key={index}
              className="bg-teal-400/10 text-white border  border-teal-400 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(7,161,154,0.8)] duration-300 transition-all "
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </InteractiveHoverButton>
          ))}
        </div>
      </section>
      <section className="text-center my-12">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Meet the Developers
        </h2>
        <motion.div className="flex flex-wrap justify-center gap-12">
          {developers.map((dev, index) => (
            <motion.div key={index} className="text-center">
              <a
                href={dev.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <div className="relative w-32 h-32 rounded-full p-1 shadow-lg border border-teal-400 overflow-hidden hover:drop-shadow-[0_0_10px_rgba(45,212,191,0.8)] duration-300 ease-in-out">
                  <img
                    src={dev.img}
                    alt={dev.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="mt-2 text-lg font-semibold text-white hover:text-teal-300 transition">
                  {dev.name}
                </p>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
