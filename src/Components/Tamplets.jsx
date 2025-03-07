import { useState } from "react";
import { X } from "lucide-react";

const Template = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    {
      id: 1,
      name: "Classic Resume",
      description:
        "A clean and professional layout with a traditional structure.",
      image: "./public/images/temp1.jpg",
    },
    {
      id: 2,
      name: "Modern Resume",
      description: "A sleek, contemporary design with bold headers and icons.",
      image: "./public/images/temp2.jpg",
    },
    {
      id: 3,
      name: "Creative Resume",
      description: "A visually engaging template with unique styling elements.",
      image: "./public/images/temp3.jpg",
    },
    {
      id: 4,
      name: "Minimalist Resume",
      description: "A simple yet elegant design focusing on content clarity.",
      image: "./public/images/temp1.jpg",
    },
    {
      id: 5,
      name: "Corporate Resume",
      description:
        "A structured template tailored for corporate professionals.",
      image: "./public/images/temp2.jpg",
    },
    {
      id: 6,
      name: "Infographic Resume",
      description: "A visually rich resume featuring charts and icons.",
      image: "./public/images/temp3.jpg",
    },
  ];

  return (
    <div className="p-4  min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Choose Your Resume Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            onClick={() => setSelectedTemplate(template)}
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="bg-gray-100 p-2 rounded-lg flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">{template.name}</h2>
                <p className="text-gray-800">{template.description}</p>
              </div>
              <button
                className="bg-blue-600 ml-3 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUseTemplate(template);
                }}
              >
                Use
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTemplate && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-xl shadow-xl relative max-w-xl w-full flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={() => setSelectedTemplate(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedTemplate.image}
              alt={selectedTemplate.name}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="mt-2 flex items-center justify-between w-full px-4">
              <h2 className="text-2xl font-semibold">
                {selectedTemplate.name}
              </h2>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                onClick={() => handleUseTemplate(selectedTemplate)}
              >
                Use
              </button>
            </div>
            {/* <p className="text-gray-600 mt-2 text-center">{selectedTemplate.description}</p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Template;
