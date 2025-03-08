import React from 'react';
import { usePDF } from 'react-to-pdf';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function Creative() {
  const { toPDF, targetRef } = usePDF({
    filename: 'resume.pdf'
  });

  return (
    <div className="min-h-screen p-8">
      {/* Download Button */}
      {/* <div className="fixed top-4 right-4">
        <button
          onClick={() => toPDF()}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={20} />
          Download PDF
        </button>
      </div> */}

      {/* Resume Content */}
      <div ref={targetRef} className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold">K Sai Kiran Naik</h1>
              <p className="text-xl mt-2">Full Stack Developer</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:john@example.com">john@example.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>New York, USA</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com" className="flex items-center gap-2 hover:text-blue-200">
                  <Github size={20} />
                  GitHub
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-blue-200">
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
            <img
              src="./images/sai_kiran.jpg"
              alt="Profile"
              className="w-35 h-35 rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="p-8 grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-1 space-y-6">
            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Master of Computer Science</h3>
                  <p className="text-gray-600">Stanford University</p>
                  <p className="text-sm text-gray-500">2018 - 2020</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Engineering</h3>
                  <p className="text-gray-600">MIT</p>
                  <p className="text-sm text-gray-500">2014 - 2018</p>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 mb-4">Technical Skills</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <p className="text-gray-600">JavaScript, TypeScript, Python, Java</p>
                </div>
                <div>
                  <h3 className="font-semibold">Frontend</h3>
                  <p className="text-gray-600">React, Vue.js, HTML5, CSS3, Tailwind</p>
                </div>
                <div>
                  <h3 className="font-semibold">Backend</h3>
                  <p className="text-gray-600">Node.js, Express, Django, Spring</p>
                </div>
                <div>
                  <h3 className="font-semibold">Database</h3>
                  <p className="text-gray-600">MongoDB, PostgreSQL, Redis</p>
                </div>
              </div>
            </section>

            {/* Certificates */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 mb-4">Certificates</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="font-semibold">AWS Certified Solutions Architect</h3>
                  <p className="text-sm text-gray-500">2023</p>
                </div>
                <div>
                  <h3 className="font-semibold">Google Cloud Professional Developer</h3>
                  <p className="text-sm text-gray-500">2022</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-2 space-y-6">
            {/* Experience */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Senior Software Engineer</h3>
                    <p className="text-gray-500">2020 - Present</p>
                  </div>
                  <p className="text-gray-600">Google</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Led a team of 5 developers in building a cloud-native application</li>
                    <li>Improved system performance by 40% through optimization</li>
                    <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">Software Engineer</h3>
                    <p className="text-gray-500">2018 - 2020</p>
                  </div>
                  <p className="text-gray-600">Microsoft</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Developed and maintained multiple microservices</li>
                    <li>Collaborated with cross-functional teams to deliver features</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 mb-4">Projects</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">E-commerce Platform</h3>
                  <p className="text-gray-600">Full-stack application with React, Node.js, and MongoDB</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Implemented real-time inventory management</li>
                    <li>Integrated payment gateway and order processing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Task Management System</h3>
                  <p className="text-gray-600">Vue.js and Django-based project management tool</p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Built drag-and-drop interface for task organization</li>
                    <li>Implemented real-time updates using WebSocket</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Awards and Achievements */}
            <section>
              <h2 className="text-xl font-bold text-blue-800 mb-4">Awards & Achievements</h2>
              <div className="space-y-2">
                <div>
                  <h3 className="font-semibold">Best Innovation Award</h3>
                  <p className="text-gray-600">Google Internal Hackathon 2022</p>
                </div>
                <div>
                  <h3 className="font-semibold">1st Place</h3>
                  <p className="text-gray-600">International Coding Competition 2021</p>
                </div>
                {/* <div>
                  <h3 className="font-semibold">Published Paper</h3>
                  <p className="text-gray-600">IEEE Conference on Cloud Computing 2020</p>
                </div> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creative;