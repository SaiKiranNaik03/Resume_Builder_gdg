import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Content = () => {
  return (
    <motion.section
      className="py-16 px-6 bg-gray-900/50 text-gray-300 mb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-semibold text-white mb-6"
          variants={fadeInUp}
        >
          Why Choose <span className="text-teal-400">SmartResume?</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          Build professional, ATS-friendly resumes in seconds with AI-powered
          templates.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "AI-Powered Resume Generation",
            "Multiple Professional Templates",
            "Instant PDF Download",
            "Customizable Design Options",
            "Optimized for Job Applications",
            "Easy Editing & Updates",
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              variants={fadeInUp}
            >
              <CheckCircle className="h-6 w-6 text-teal-400" />
              <p className="text-lg">{feature}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Content;
