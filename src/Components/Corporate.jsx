import React from 'react';
import { usePDF } from 'react-to-pdf';
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function Corporate() {
  const { toPDF, targetRef } = usePDF({
    filename: 'resume.pdf'
  });

  return (
    <div className="min-h-screen p-8">
      {/* Download Button */}
      {/* <div className="fixed top-4 right-4">
        <button
          onClick={() => toPDF()}
          className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700 transition-colors"
        >
          <Download size={20} />
          Download PDF
        </button>
      </div> */}

      {/* Resume Content */}
      <div ref={targetRef} className="max-w-4xl mx-auto bg-white rounded-lg">
        {/* Header Section */}
        <div className="p-8 border-b border-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-light text-slate-900">K Sai Kiran Naik</h1>
              <p className="text-lg text-slate-600 mt-1">Senior Software Architect</p>
              <div className="flex flex-wrap gap-6 mt-4 text-sm text-slate-600">
                <a href="mailto:sarah@example.com" className="flex items-center gap-2 hover:text-slate-900">
                  <Mail size={16} />
                  sarah@example.com
                </a>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  San Francisco, CA
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                  <Github size={18} />
                  github.com/sarahanderson
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                  <Linkedin size={18} />
                  linkedin.com/in/sarahanderson
                </a>
              </div>
            </div>
            <img
              src="./images/kiran.jpg"
              alt="Profile"
              className="w-30 h-30 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 p-8">
          {/* Left Column */}
          <div className="col-span-4 space-y-8">
            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">Education</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-slate-900">M.S. Computer Science</p>
                  <p className="text-slate-600">Stanford University</p>
                  <p className="text-slate-500">2016 - 2018</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">B.S. Software Engineering</p>
                  <p className="text-slate-600">UC Berkeley</p>
                  <p className="text-slate-500">2012 - 2016</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">Technical Skills</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-slate-900">Languages</p>
                  <p className="text-slate-600">TypeScript, Python, Go, Rust</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Frontend</p>
                  <p className="text-slate-600">React, Next.js, TailwindCSS</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Backend</p>
                  <p className="text-slate-600">Node.js, gRPC, GraphQL</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Cloud & DevOps</p>
                  <p className="text-slate-600">AWS, Kubernetes, Terraform</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">Certifications</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium text-slate-900">AWS Solutions Architect Professional</p>
                  <p className="text-slate-500">2023</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Certified Kubernetes Administrator</p>
                  <p className="text-slate-500">2022</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Certified Full Stack Developer</p>
                  <p className="text-slate-500">2020</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-8 space-y-8">
            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">Experience</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium text-slate-900">Principal Software Engineer</p>
                      <p className="text-slate-600">Stripe</p>
                    </div>
                    <p className="text-slate-500">2020 - Present</p>
                  </div>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    <li>• Led architecture design for distributed payment processing system</li>
                    <li>• Reduced system latency by 40% through innovative caching strategy</li>
                    <li>• Mentored team of 8 senior engineers across 3 time zones</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium text-slate-900">Senior Software Engineer</p>
                      <p className="text-slate-600">Airbnb</p>
                    </div>
                    <p className="text-slate-500">2018 - 2020</p>
                  </div>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    <li>• Architected real-time booking system handling 10K+ requests/sec</li>
                    <li>• Implemented ML-based fraud detection reducing fraud by 60%</li>
                    <li>• Led migration from monolith to microservices architecture</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">Key Projects</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-slate-900">Global Payment Gateway</p>
                  <p className="text-sm text-slate-600 mt-1">Designed and implemented a scalable payment processing system handling $2B+ in annual transactions across 30+ countries.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">AI-Powered Recommendation Engine</p>
                  <p className="text-sm text-slate-600 mt-1">Built a machine learning system that increased user engagement by 45% through personalized content recommendations.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-semibold text-slate-900 tracking-widest uppercase mb-4">Awards & Recognition</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium text-slate-900">Patent: Distributed System Architecture</p>
                  <p className="text-slate-600">US Patent Office, 2023</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Engineering Excellence Award</p>
                  <p className="text-slate-600">Stripe, 2022</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Best Paper Award</p>
                  <p className="text-slate-600">International Conference on Cloud Computing, 2021</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corporate;