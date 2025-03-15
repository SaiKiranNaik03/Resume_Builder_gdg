import React from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  AlignCenterVertical as Certificate,
  Code,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import DownloadButton from "./DownloadButton";

function Modern() {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div className="min-h-screen p-4">
      <DownloadButton />
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-1">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-t-xl shadow-lg p-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-100 rounded-bl-full opacity-50" />
            <div className="relative">
              <h1 className="text-4xl font-bold text-gray-800">
                {formData.personalDetails?.name}
              </h1>
              <p className="text-xl text-indigo-600 mt-1">
                {formData.personalDetails?.role || "Full Stack Developer"}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-1 text-gray-600">
                <a
                  href={`mailto:${formData.personalDetails?.email}`}
                  className="flex items-center gap-2 hover:text-indigo-600 bg-gray-50 px-3 py-1 rounded-full"
                >
                  <Mail size={18} />
                  {formData.personalDetails?.email}
                </a>
                <a
                  href={`tel:${formData.personalDetails?.phone}`}
                  className="flex items-center gap-2 hover:text-indigo-600 bg-gray-50 px-3 py-1 rounded-full"
                >
                  <Phone size={18} />
                  {formData.personalDetails?.phone}
                </a>
                <a
                  href={formData.personalDetails?.github}
                  className="flex items-center gap-2 hover:text-indigo-600 bg-gray-50 px-3 py-1 rounded-full"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={formData.personalDetails?.linkedin}
                  className="flex items-center gap-2 hover:text-indigo-600 bg-gray-50 px-3 py-1 rounded-full"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-2">
            {/* Left Column */}
            <div className="space-y-2">
              {/* Education Section */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <GraduationCap size={24} />
                  <h2 className="text-xl font-bold">Education</h2>
                </div>
                <div className="space-y-2">
                  {formData.education?.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-semibold">{edu.domain}</h3>
                      <p className="text-indigo-600">{edu.institute}</p>
                      <p className="text-gray-500 text-sm">{edu.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Section - Limited to 5 skills */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <Code size={24} />
                  <h2 className="text-xl font-bold">Technical Skills</h2>
                </div>
                <div className="space-y-2">
                  {formData.skills?.slice(0, 5).map((skill, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-700">
                        {skill.skill}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">
                          Level: {skill.level}/10
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section - Limited to 3 certifications */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <Certificate size={24} />
                  <h2 className="text-xl font-bold">Certifications</h2>
                </div>
                <ul className="space-y-2">
                  {formData.certifications?.slice(0, 3).map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                      {cert.name} ({cert.issueDate})
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2 space-y-2">
              {/* Experience Section */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center gap-2 text-indigo-600 mb-2">
                  <Briefcase size={24} />
                  <h2 className="text-xl font-bold">Experience</h2>
                </div>
                <div className="space-y-3">
                  {formData.experience?.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-6 border-l-2 border-indigo-200"
                    >
                      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0" />
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.role}</h3>
                          <p className="text-indigo-600">{exp.company}</p>
                        </div>
                        <span className="text-gray-500">{exp.duration}</span>
                      </div>
                      <p className="text-gray-700 mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section - Limited to 2 projects */}
              <div className="bg-white rounded-lg shadow-lg p-3">
                <div className="flex items-center gap-2 text-indigo-600 mb-2">
                  <Code size={24} />
                  <h2 className="text-xl font-bold">Projects</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {formData.projects?.slice(0, 2).map((project, index) => (
                    <div key={index} className="bg-indigo-50 rounded-lg p-3">
                      <h3 className="font-semibold text-lg text-indigo-700">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 mt-1">{project.techStack}</p>
                      <p className="text-gray-700 mt-2">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modern;
