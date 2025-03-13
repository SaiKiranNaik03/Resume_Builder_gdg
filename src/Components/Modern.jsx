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
    <div className="min-h-screen p-8">
      <DownloadButton />
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-2">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-t-xl shadow-lg p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-bl-full opacity-50" />
            <div className="relative">
              <h1 className="text-5xl font-bold text-gray-800">
                K Sai Kiran Naik
              </h1>
              <p className="text-2xl text-indigo-600 mt-1">
                Full Stack Developer
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600">
                <a
                  href="mailto:john@example.com"
                  className="flex items-center gap-2 hover:text-indigo-600 bg-gray-50 px-3 py-1 rounded-full"
                >
                  <Mail size={18} />
                  john@example.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 hover:text-indigo-600 bg-gray-50 px-3 py-1 rounded-full"
                >
                  <Phone size={18} />
                  (123) 456-7890
                </a>
                <a
                  href="https://github.com/johndoe"
                  className="flex items-center gap-2 hover:text-indigo-600 bg-gray-50 px-3 py-1 rounded-full"
                >
                  <Github size={18} />
                  github.com/johndoe
                </a>
                <a
                  href="https://linkedin.com/in/johndoe"
                  className="flex items-center gap-2 hover:text-indigo-600 bg-gray-50 px-3 py-1 rounded-full"
                >
                  <Linkedin size={18} />
                  linkedin.com/in/johndoe
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {/* Left Column */}
            <div className="space-y-3">
              {/* Education Section */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <GraduationCap size={24} />
                  <h2 className="text-xl font-bold">Education</h2>
                </div>
                <div className="space-y-2">
                  <div>
                    <h3 className="font-semibold">
                      Master of Computer Science
                    </h3>
                    <p className="text-indigo-600">Stanford University</p>
                    <p className="text-gray-500 text-sm">2018 - 2020</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Bachelor of Engineering</h3>
                    <p className="text-indigo-600">MIT</p>
                    <p className="text-gray-500 text-sm">2014 - 2018</p>
                  </div>
                </div>
              </div>

              {/* Technical Skills Section */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <Code size={24} />
                  <h2 className="text-xl font-bold">Technical Skills</h2>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      title: "Languages",
                      skills: ["JavaScript", "TypeScript", "Python", "Java"],
                    },
                    {
                      title: "Frontend",
                      skills: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind"],
                    },
                    {
                      title: "Backend",
                      skills: ["Node.js", "Express", "Django", "Spring Boot"],
                    },
                    {
                      title: "Database",
                      skills: ["MongoDB", "PostgreSQL", "Redis"],
                    },
                  ].map((category) => (
                    <div key={category.title}>
                      <h3 className="font-semibold text-gray-700">
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <Certificate size={24} />
                  <h2 className="text-xl font-bold">Certifications</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                    AWS Certified Solutions Architect
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                    Google Cloud Professional Developer
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                    MongoDB Certified Developer
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                    Frontend Certified Developer
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                    Udemy Devops Certification
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2 space-y-4">
              {/* Experience Section */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-4">
                  <Briefcase size={24} />
                  <h2 className="text-xl font-bold">Experience</h2>
                </div>
                <div className="space-y-4">
                  <div className="relative pl-6 border-l-2 border-indigo-200">
                    <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0" />
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Senior Software Engineer
                        </h3>
                        <p className="text-indigo-600">Google</p>
                      </div>
                      <span className="text-gray-500">2020 - Present</span>
                    </div>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Led a team of 5 developers in building a cloud-native
                          application
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Improved system performance by 40% through
                          optimization
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Implemented CI/CD pipeline reducing deployment time by
                          60%
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-6 border-l-2 border-indigo-200">
                    <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0" />
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">
                          Software Engineer
                        </h3>
                        <p className="text-indigo-600">Microsoft</p>
                      </div>
                      <span className="text-gray-500">2018 - 2020</span>
                    </div>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Developed microservices architecture for scalable
                          applications
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Collaborated with cross-functional teams to deliver
                          features
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Mentored junior developers and conducted code reviews
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-4">
                  <Code size={24} />
                  <h2 className="text-xl font-bold">Projects</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* {formData.projects?.map((project, index) => (
                    <div key={index} className="bg-indigo-50 rounded-lg p-4">
                      <h3 className="font-semibold text-lg text-indigo-700">
                        {project.title}
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))} */}

                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-indigo-700">
                      E-commerce Platform
                    </h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Built a full-stack e-commerce platform using React,
                          Node.js, and MongoDB
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Implemented responsive design and optimized
                          performance
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-indigo-700">
                      Real-time Chat Application
                    </h3>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Developed a WebSocket-based chat application with
                          React and Socket.io
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                        <span className="text-gray-700">
                          Implemented real-time messaging and notification
                          features
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Awards Section */}
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-3">
                  <Award size={24} />
                  <h2 className="text-xl font-bold">Awards & Achievements</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-indigo-50 rounded-lg p-3">
                    <Award className="text-indigo-600" size={20} />
                    <div>
                      <h3 className="font-semibold text-indigo-700">
                        Best Innovation Award
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Google Hackathon 2022
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-indigo-50 rounded-lg p-3">
                    <Award className="text-indigo-600" size={20} />
                    <div>
                      <h3 className="font-semibold text-indigo-700">
                        First Place
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Microsoft Code Competition 2021
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-indigo-50 rounded-lg p-3">
                    <Award className="text-indigo-600" size={20} />
                    <div>
                      <h3 className="font-semibold text-indigo-700">
                        Outstanding Graduate
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Stanford University
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Resume Content */}
    </div>
  );
}

export default Modern;
