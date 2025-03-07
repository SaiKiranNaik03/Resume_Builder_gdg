import React from 'react';
import { usePDF } from 'react-to-pdf';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

function Classical() {
  const { toPDF, targetRef } = usePDF({
    filename: 'resume.pdf'
  });

  return (
    <div className="min-h-screen p-8">
          {/* Download Button */}
          {/* <div className="fixed top-4 right-4">
      <button
        onClick={() => window.print()} 
        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <Download size={20} />
        Print / Download
      </button>
    </div> */}

      {/* Resume Content */}
      <div ref={targetRef} className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="p-6 pl-10 pr-10 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-800">K Sai Kiran Naik</h1>
          <p className="text-xl text-gray-600 mt-1">Full Stack Developer</p>
          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <a href="mailto:john@example.com" className="flex items-center gap-1 hover:text-blue-600">
              <Mail size={18} />
              john@example.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-blue-600">
              <Phone size={18} />
              (123) 456-7890
            </a>
            <a href="https://github.com/johndoe" className="flex items-center gap-1 hover:text-blue-600">
              <Github size={18} />
              github.com/johndoe
            </a>
            <a href="https://linkedin.com/in/johndoe" className="flex items-center gap-1 hover:text-blue-600">
              <Linkedin size={18} />
              linkedin.com/in/johndoe
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 p-6 pl-10 pr-10">
          {/* Left Column */}
          <div className="col-span-1">
            {/* Education Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Education</h2>
              <div className="space-y-1">
                <div>
                  <h3 className="font-semibold">Master of Computer Science</h3>
                  <p className="text-gray-600">Stanford University</p>
                  <p className="text-gray-500 text-sm">2018 - 2020</p>
                </div>
                <div>
                  <h3 className="font-semibold">Bachelor of Engineering</h3>
                  <p className="text-gray-600">MIT</p>
                  <p className="text-gray-500 text-sm">2014 - 2018</p>
                </div>
                <div>
                  <h3 className="font-semibold">Math, Physics, Chemistry</h3>
                  <p className="text-gray-600">KV AFS Begumpet</p>
                  <p className="text-gray-500 text-sm">2012 - 2014</p>
                </div>
              </div>
            </section>

            {/* Technical Skills Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Technical Skills</h2>
              <div className="space-y-1">
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
                  <p className="text-gray-600">Node.js, Express, Django, Spring Boot</p>
                </div>
                <div>
                  <h3 className="font-semibold">Database</h3>
                  <p className="text-gray-600">MongoDB, PostgreSQL, Redis</p>
                </div>
              </div>
            </section>

            {/* Certifications Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Certifications</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>AWS Certified Solutions Architect</li>
                <li>Google Cloud Professional Developer</li>
                <li>MongoDB Certified Developer</li>
                <li>Frontend Certified Developer</li>
                <li>Backend Certified Developer</li>
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-2">
            {/* Experience Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Experience</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Senior Software Engineer - Google</h3>
                    <span className="text-gray-500 text-sm">2020 - Present</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Led a team of 5 developers in building a cloud-native application</li>
                    <li>Improved system performance by 40% through optimization</li>
                    <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Software Engineer - Microsoft</h3>
                    <span className="text-gray-500 text-sm">2018 - 2020</span>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Developed microservices architecture for scalable applications</li>
                    <li>Collaborated with cross-functional teams to deliver features</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Projects</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">E-commerce Platform</h3>
                  {/* <p className="text-gray-600">Built a full-stack e-commerce platform using React, Node.js, and MongoDB</p> */}
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Built a full-stack e-commerce platform using React, Node.js, and MongoDB</li>
                    <li>Collaborated with cross-functional teams to deliver features</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Real-time Chat Application</h3>
                  {/* <p className="text-gray-600">Developed a WebSocket-based chat application with React and Socket.io</p> */}
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Developed a WebSocket-based chat application with React and Socket.io</li>
                    <li>Collaborated with cross-functional teams to deliver features</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Wather Forcast Application</h3>
                  {/* <p className="text-gray-600">Developed a WebSocket-based chat application with React and Socket.io</p> */}
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Developed a WebSocket-based chat application with React and Socket.io</li>
                    <li>Collaborated with cross-functional teams to deliver features</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Awards Section */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Awards & Achievements</h2>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>First Place - Microsoft Code Competition 2021</li>
                <li>Best Innovation Award - Google Hackathon 2022</li>
                <li>First Place - Microsoft Code Competition 2021</li>
                <li>Outstanding Graduate Award - Stanford University</li>
                <li>Outstanding Graduate Award - Stanford University</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classical;