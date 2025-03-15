import { useState } from "react";
import { X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/Components/ui/card.jsx";
import { Button } from "@/Components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog.jsx";

const Template = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const location = useLocation();
  const formData = location.state?.formData || {};
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      name: "Classic Resume",
      description:
        "A clean and professional layout with a traditional structure.",
      image: "/images/classical.jpg",
      disabled: false,
      to: "/classical",
    },
    {
      id: 2,
      name: "Modern Resume",
      description: "A sleek, contemporary design with bold headers and icons.",
      image: "/images/modern.jpg",
      disabled: false,
      to: "/modern",
    },
    {
      id: 3,
      name: "Creative Resume",
      description: "A visually engaging template with unique styling elements.",
      image: "/images/creative.jpg",
      disabled: false,
      to: "/creative",
    },
    {
      id: 5,
      name: "Corporate Resume",
      description:
        "A structured template tailored for corporate professionals.",
      image: "/images/corporate.jpg",
      disabled: false,
      to: "/corporate",
    },
    {
      id: 4,
      name: "Minimalist Resume",
      description: "A simple yet elegant design focusing on content clarity.",
      image: "/images/soon.jpg",
      disabled: true,
    },
    {
      id: 6,
      name: "Infographic Resume",
      description: "A visually rich resume featuring charts and icons.",
      image: "/images/soon.jpg",
      disabled: true,
    },
  ];

  const handleClick = (to) => {
    if (Object.keys(formData).length === 0) {
      navigate("/input");
    } else {
      navigate(to, { state: { formData } });
    }
  };

  return (
    <motion.div
      className="p-6 min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-950 to-gray-900 font-semibold"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center mb-8 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400 drop-shadow-lg">
          Choose Your Resume Template
        </h1>

        {/* New PC recommendation message */}
        <div className="max-w-2xl mx-auto space-y-2">
          <p className="text-yellow-400 text-sm md:text-base font-medium bg-yellow-500/10 px-4 py-2 rounded-full inline-block">
            🖥️ For the best resume building experience, use a PC/Desktop
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Create pixel-perfect resumes with precise formatting and layout
            control on a larger screen.
          </p>
        </div>
      </motion.div>

      {/* Template Cards with enhanced styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full max-w-7xl p-4 bg-gray-950/30 rounded-2xl backdrop-blur-sm">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: template.id * 0.1 }}
            className="group"
          >
            <Card
              className={`relative transition-all duration-500 ${
                template.disabled
                  ? "grayscale opacity-50 cursor-not-allowed bg-gray-950/50"
                  : "hover:shadow-2xl hover:shadow-teal-500/20 hover:scale-[1.02] cursor-pointer bg-gray-950/80 hover:bg-gray-900/90"
              } border-0 backdrop-blur-sm overflow-hidden ring-1 ring-gray-800/50 group-hover:ring-teal-500/50`}
              onClick={() =>
                !template.disabled && setSelectedTemplate(template)
              }
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent z-10" />
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {template.disabled && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-950/75 z-20">
                      <span className="text-white font-semibold text-lg px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-gradient-to-b from-gray-950/90 to-gray-900/90 text-white rounded-b-xl flex flex-col gap-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-teal-400 group-hover:text-teal-300 transition-colors">
                    {template.name}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {template.description}
                  </p>
                </div>
                {!template.disabled && (
                  <Button
                    variant="default"
                    className="bg-teal-500/90 hover:bg-teal-400 transition-all duration-300 shadow-lg 
                             hover:shadow-teal-500/50 w-full group-hover:translate-y-0 translate-y-1
                             backdrop-blur-sm text-white font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(template.to);
                    }}
                  >
                    Use Template
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Dialog styling */}
      <Dialog
        open={!!selectedTemplate}
        onOpenChange={() => setSelectedTemplate(null)}
      >
        <DialogContent
          className="bg-gray-950/95 backdrop-blur-xl border border-gray-800/50 
                                  rounded-xl shadow-2xl max-w-4xl ring-1 ring-teal-500/20"
        >
          {selectedTemplate && (
            <>
              <DialogHeader>
                <DialogTitle
                  className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-500 
                                      bg-clip-text text-transparent"
                >
                  {selectedTemplate.name}
                </DialogTitle>
              </DialogHeader>
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent z-10" />
                <img
                  src={selectedTemplate.image}
                  alt={selectedTemplate.name}
                  className="w-full max-h-[70vh] object-contain rounded-xl"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full px-4 mt-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-teal-400">
                    {selectedTemplate.name}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {selectedTemplate.description}
                  </p>
                </div>
                <Button
                  className="bg-teal-500/90 hover:bg-teal-400 transition-all duration-300 
                             shadow-lg hover:shadow-teal-500/50 w-full md:w-auto backdrop-blur-sm"
                  onClick={() => {
                    handleClick(selectedTemplate.to);
                  }}
                >
                  Use Template
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Template;
