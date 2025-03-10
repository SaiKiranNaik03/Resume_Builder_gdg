import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import DownloadButton from "./DownloadButton";
function Classical() {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div className="min-h-screen p-8">
      <DownloadButton />

      {/* Resume Content */}
      <div
        className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden"
        id="print"
      >
        {/* Header Section */}
        <div className="p-6 pl-10 pr-10 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800">
            {formData.personalDetails?.name}
          </h1>
          <p className="text-xl text-gray-600 mt-1">Full Stack Developer</p>
          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <a
              href="mailto:john@example.com"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Mail size={18} />
              {formData.personalDetails?.email}
            </a>
            <a
              href={`tel:${formData.personalDetails?.phone}`}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Phone size={18} />
              {formData.personalDetails?.phone}
            </a>
            <a
              href={formData.personalDetails?.github}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={formData.personalDetails?.linkedin}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Linkedin size={18} />
              linkedin
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 p-6 pl-10 pr-10">
          {/* Left Column */}
          <div className="col-span-1">
            {/* Education Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Education
              </h2>
              <div className="space-y-1">
                {formData.education?.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{edu.domain}</h3>
                    <p className="text-gray-600">{edu.institute}</p>
                    <p className="text-gray-500 text-sm">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1">
                {formData.skills?.map((skill, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{skill.skill}</h3>
                    <p className="text-gray-600">Level: {skill.level}/10</p>
                  </div>
                ))}
              </div>
            </section>
            {/* Certifications Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {formData.certifications?.map((cert, index) => (
                  <li key={index}>
                    {cert.name} ({cert.issueDate})
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-2">
            {/* Experience Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Experience
              </h2>
              <div className="space-y-3">
                {formData.experience?.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">
                        {exp.role} - {exp.company}
                      </h3>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
            {/* Projects Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Projects</h2>
              <div className="space-y-3">
                {formData.projects?.map((proj, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{proj.name}</h3>
                    <p className="text-gray-600">{proj.techStack}</p>
                    <p className="text-gray-600">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
            {/* Awards Section */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Awards & Achievements
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {formData.Awards?.map((award, index) => (
                  <li key={index}>
                    {award.name} - {award.description}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classical;
