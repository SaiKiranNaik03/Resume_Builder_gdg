import React from "react";

import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { form } from "framer-motion/client";
import DownloadButton from "./DownloadButton";

function Corporate() {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const imageFile =
    formData.personalDetails?.image instanceof File
      ? formData.personalDetails.image
      : null;
  const imageUrl = imageFile ? URL.createObjectURL(imageFile) : null;
  return (
    <div className="min-h-screen p-8">
      <DownloadButton />

      {/* Resume Content */}
      <div className="max-w-4xl w-full mx-auto bg-white rounded-lg">
        {/* Header Section */}
        <div className="p-8 border-b border-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-light text-slate-900">
                {formData.personalDetails?.name || "Sarah Anderson"}
              </h1>
              <p className="text-lg text-slate-600 mt-1">
                {formData.personalDetails?.title || "Software Engineer"}
              </p>
              <p className="text-sm font-semibold text-slate-600">
                {formData.personalDetails?.quote}
              </p>
              <div className="flex flex-wrap gap-6 mt-4 text-sm text-slate-600">
                <a
                  href="mailto:sarah@example.com"
                  className="flex items-center gap-2 hover:text-slate-900"
                >
                  <Mail size={16} />
                  {formData.personalDetails?.email || ""}
                </a>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  {formData.personalDetails?.phone || ""}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {formData.personalDetails?.location || ""}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={formData.personalDetails?.github || "#"}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
                >
                  <Github size={18} />
                  Github
                </a>
                <a
                  href={formData.personalDetails?.linkedin || "#"}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
                >
                  <Linkedin size={18} />
                  linkedin
                </a>
              </div>
            </div>
            <img
              src={imageUrl}
              alt="Profile"
              className="w-30 h-30 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 p-8">
          {/* Left Column */}
          <div className="col-span-4 space-y-8">
            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">
                Education
              </h2>
              <div className="space-y-4 text-sm">
                {formData.education?.map((edu, index) => (
                  <div key={index}>
                    <p className="font-medium text-slate-900">{edu.degree}</p>
                    <p className="text-slate-600">{edu.institute}</p>
                    <p className="text-slate-500">{edu.duration}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">
                Technical Skills
              </h2>
              <div className="space-y-3 text-sm">
                {formData.skills?.map((skill, index) => (
                  <div key={index}>
                    <p className="font-medium text-slate-900">{skill.skill}</p>
                    <p className="text-slate-600">Level: {skill.level}/10</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">
                Certifications
              </h2>
              <div className="space-y-2 text-sm">
                {formData.certifications?.map((cert, index) => (
                  <div key={index}>
                    <p className="font-medium text-slate-900">{cert.name}</p>
                    <p className="text-slate-500">{cert.issueDate}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-8 space-y-8">
            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">
                Experience
              </h2>
              <div className="space-y-6">
                {formData.experience?.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="font-medium text-slate-900">
                          {exp.designation}
                        </p>
                        <p className="text-slate-600">{exp.company}</p>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-slate-600 space-y-1">
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">
                Key Projects
              </h2>
              <div className="space-y-4">
                {formData.projects?.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-slate-900">
                        {project.name}
                      </p>
                      <a
                        href={project.repo}
                        className="text-sm  text-blue-600 hover:underline"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                    <p className="text-slate-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">
                Awards & Recognition
              </h2>
              <div className="space-y-2 text-sm">
                {formData.Awards?.map((award, index) => (
                  <div key={index}>
                    <p className="font-medium text-slate-900">{award.name}</p>
                    <p className="text-slate-600">{award.date}</p>
                    <p className="text-slate-600">{award.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corporate;
