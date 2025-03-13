import { motion } from "framer-motion";
import Landing from "../Components/Landing";
import Content from "../Components/Content";
import { Link } from "react-router-dom";
import { Users, ClipboardCheck, FileText, Star } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/Components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { InteractiveHoverButton } from "@/Components/magicui/interactive-hover-button.jsx";
// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Home = () => {
  return (
    <div className=" text-gray-300">
      {/* Hero Section */}
      <Landing />

      {/* Features Section */}
      <Content />

      {/* How It Works */}
      <motion.section
        className="py-16 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-4xl font-semibold text-white mb-6">
          How <span className="text-teal-400">It Works</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Create your professional resume in **3 simple steps**.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: ClipboardCheck,
              title: "Choose a Template",
              desc: "Pick from multiple professional resume templates.",
            },
            {
              icon: FileText,
              title: "Fill in Your Details",
              desc: "Enter your information or let AI generate content for you.",
            },
            {
              icon: Users,
              title: "Download & Apply",
              desc: "Export your resume as a PDF and start applying!",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="bg-gray-800/50 border-gray-700 shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <item.icon className="h-12 w-12 text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold text-teal-500">
                    {item.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-16 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h2 className="text-4xl font-semibold text-white mb-6">
          What Our Users Say
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "John Doe",
              review: "This AI-powered resume builder saved me hours of work!",
            },
            {
              name: "Sarah K.",
              review:
                "The templates are so clean and professional. I landed my job fast!",
            },
            {
              name: "David M.",
              review:
                "Easy to use, customizable, and super effective. Highly recommend!",
            },
          ].map((testimonial, index) => (
            <motion.div key={index} variants={slideInLeft}>
              <Card className="bg-gray-800/50 border-gray-700 shadow-lg">
                <CardHeader className="flex flex-col items-center">
                  <Star className="h-6 w-6 text-yellow-400 mb-2" />
                  <h4 className="text-lg font-semibold text-teal-400">
                    {testimonial.name}
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="py-16 px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold text-white">
          Ready to Build Your Resume?
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Get started for free and create your perfect resume in minutes.
        </p>
        <motion.div whileTap={{ scale: 0.95 }}>
          <InteractiveHoverButton className="mt-6 px-8 py-3 text-lg text-black font-medium bg-teal-500/90 hover:bg-teal-400 transition-all">
            <Link to="/input">Get Started</Link>
          </InteractiveHoverButton>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
