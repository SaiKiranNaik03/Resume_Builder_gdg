const Template = () => {
    const templates = [
      {
        id: 1,
        name: "Classic Resume",
        description: "A clean and professional layout with a traditional structure.",
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
        description: "A structured template tailored for corporate professionals.",
        image: "./public/images/temp2.jpg",
      },
      {
        id: 6,
        name: "Infographic Resume",
        description: "A visually rich resume featuring charts and icons.",
        image: "./public/images/temp3.jpg",
      }
    ];
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Choose Your Resume Template</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <img src={template.image} alt={template.name} className="w-full h-auto object-contain rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
              <p className="text-gray-600">{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Template;