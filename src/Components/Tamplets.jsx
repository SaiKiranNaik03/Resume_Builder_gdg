// import { useState } from "react";
// import { X } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// const Template = () => {
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const location = useLocation();
//   const formData = location.state?.formData || {};
//   const navigate = useNavigate();

//   const templates = [
//     {
//       id: 1,
//       name: "Classic Resume",
//       description:
//         "A clean and professional layout with a traditional structure.",
//       image: "/images/classical.jpg",
//       disabled: false,
//       to: "/classical",
//     },
//     {
//       id: 2,
//       name: "Modern Resume",
//       description: "A sleek, contemporary design with bold headers and icons.",
//       image: "/images/modern.jpg",
//       disabled: false,
//       to: "/modern",
//     },
//     {
//       id: 3,
//       name: "Creative Resume",
//       description: "A visually engaging template with unique styling elements.",
//       image: "/images/creative.jpg",
//       disabled: false,
//       to: "/creative",
//     },
//     {
//       id: 5,
//       name: "Corporate Resume",
//       description:
//         "A structured template tailored for corporate professionals.",
//       image: "/images/corporate.jpg",
//       disabled: false,
//       to: "/corporate",
//     },
//     {
//       id: 4,
//       name: "Minimalist Resume",
//       description: "A simple yet elegant design focusing on content clarity.",
//       image: "/images/soon.jpg",
//       disabled: true,
//     },
//     {
//       id: 6,
//       name: "Infographic Resume",
//       description: "A visually rich resume featuring charts and icons.",
//       image: "/images/soon.jpg",
//       disabled: true,
//     },
//   ];
//   const handleClick = (to) => {
//     navigate(to, { state: { formData: formData } });
//   };

//   return (
//     <div className="p-4 min-h-screen flex flex-col items-center">
//       <h1 className="font-semibold tracking-tight text-center text-4xl font-extrabold mb-5 text-blue-700 drop-shadow-lg">
//         Choose Your Resume Template
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
//         {templates.map((template) => (
//           <div
//             key={template.id}
//             className={`bg-white p-2 rounded-xl shadow-lg transition-all ${
//               template.disabled
//                 ? "grayscale opacity-50 cursor-not-allowed"
//                 : "hover:shadow-xl cursor-pointer"
//             }`}
//             onClick={() => !template.disabled && setSelectedTemplate(template)}
//           >
//             <img
//               src={template.image}
//               alt={template.name}
//               className="w-full h-auto object-contain rounded-lg"
//             />
//             <div className="bg-gray-100 p-3 pt-0 rounded-lg flex items-center justify-between">
//               <div>
//                 <h2 className="text-xl font-semibold">{template.name}</h2>
//                 <p className="text-gray-800">{template.description}</p>
//               </div>
//               <button
//                 className="bg-blue-600 ml-3 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all cursor-pointer"
//                 onClick={(e) => {
//                   handleClick(template.to);
//                   e.stopPropagation();
//                   if (!template.disabled) handleUseTemplate(template);
//                 }}
//                 disabled={template.disabled}
//               >
//                 Use
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedTemplate && (
//         <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white p-4 rounded-xl shadow-xl relative max-w-xl w-full flex flex-col items-center">
//             <button
//               className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
//               onClick={() => setSelectedTemplate(null)}
//             >
//               <X size={25} />
//             </button>
//             <img
//               src={selectedTemplate.image}
//               alt={selectedTemplate.name}
//               className="w-full max-h-[85vh] object-contain rounded-lg"
//             />
//             <div className="flex items-center justify-between w-full px-4">
//               <h2 className="text-2xl font-semibold">
//                 {selectedTemplate.name}
//               </h2>
//               <button
//                 on
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
//                 onClick={() => {
//                   handleClick(selectedTemplate.to);
//                   handleUseTemplate(selectedTemplate);
//                 }}
//               >
//                 Use
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Template;
import { useState } from "react";
import { X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.jsx";

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
      className="p-6 min-h-screen flex flex-col items-center bg-gray-900/50 font-semibold text-center text-5xl font-extrabold mb-5 text-teal-400 drop-shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-center text-4xl font-bold text-teal-400 drop-shadow-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Choose Your Resume Template
      </motion.h1>

      {/* Template Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl bg-gray-900/20">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`relative transition-all bg-gray-800/20 border border-transparent ${
              template.disabled
                ? "grayscale opacity-50 cursor-not-allowed"
                : "hover:shadow-lg hover:scale-[1.03] cursor-pointer"
            }`}
            onClick={() => !template.disabled && setSelectedTemplate(template)}
          >
            <CardHeader className="p-0">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-auto rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4 bg-gray-800/20 text-white rounded-b-lg flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{template.name}</h2>
                <p className="text-gray-400 text-sm">{template.description}</p>
              </div>
              {!template.disabled && (
                <Button
                  variant="default"
                  className="bg-teal-500 hover:bg-teal-400 transition-all"
                  onClick={(e) => {
                    handleClick(template.to);
                    e.stopPropagation();
                  }}
                >
                  Use
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Template Preview Dialog */}
      <Dialog
        open={!!selectedTemplate}
        onOpenChange={() => setSelectedTemplate(null)}
      >
        <DialogContent className="bg-gray-900 border border-gray-700 rounded-lg">
          {selectedTemplate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-white">
                  {selectedTemplate.name}
                </DialogTitle>
              </DialogHeader>
              <img
                src={selectedTemplate.image}
                alt={selectedTemplate.name}
                className="w-full max-h-[60vh] object-contain rounded-lg"
              />
              <div className="flex justify-between items-center w-full px-4 mt-4">
                <h2 className="text-xl font-semibold text-white">
                  {selectedTemplate.name}
                </h2>
                <Button
                  className="bg-teal-500 hover:bg-teal-400 transition-all"
                  onClick={() => {
                    handleClick(selectedTemplate.to);
                  }}
                >
                  Use
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
