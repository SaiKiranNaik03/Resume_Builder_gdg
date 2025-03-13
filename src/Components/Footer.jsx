// export default Footer;
import { Instagram, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="w-full bg-black/40 backdrop-blur-lg shadow-lg text-white py-6"
      id="no-print"
    >
      <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-12 mx-auto max-w-6xl">
        {/* Left Section - Organization Info */}
        <div className="space-y-3 text-center md:text-left">
          <h3 className="font-bold text-lg tracking-wide">GDGC IARE</h3>
          <p className="text-sm text-gray-300">
            Developed by GDGC IARE Programming Team:
          </p>
          <p className="text-sm">
            <span className="font-semibold text-blue-400">
              Vishwanath Reddy (Lead)
            </span>{" "}
            &nbsp;
            <a
              href="https://vishureddy.vercel.app"
              className="text-gray-300 hover:text-blue-400 transition-all"
            >
              About
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold text-blue-400">
              Sai Kiran Naik (Co-Lead)
            </span>{" "}
            &nbsp;
            <a
              href="https://saikiran-dev.vercel.app"
              className="text-gray-300 hover:text-blue-400 transition-all"
            >
              About
            </a>
          </p>
        </div>

        {/* Right Section - Social Links */}
        <div className="mt-6 md:mt-0">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3 hover:scale-110 transition-transform">
              <Instagram className="h-5 w-5 text-gray-300 hover:text-pink-400 transition-all" />
              <a
                href="https://www.instagram.com/gdgc.iare/"
                className="text-sm text-gray-300 hover:text-pink-400 font-semibold transition-all"
              >
                @gdgc.iare
              </a>
            </div>
            <div className="flex items-center gap-3 hover:scale-110 transition-transform">
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-blue-400 transition-all" />
              <a
                href="https://www.linkedin.com/company/82561543/"
                className="text-sm text-gray-300 hover:text-blue-400 font-semibold transition-all"
              >
                GDGC IARE
              </a>
            </div>
            <div className="flex items-center gap-3 hover:scale-110 transition-transform">
              <Globe className="h-5 w-5 text-gray-300 hover:text-green-400 transition-all" />
              <a
                href="https://gdg.community.dev/"
                className="text-sm text-gray-300 hover:text-green-400 font-semibold transition-all"
              >
                gdg.community.dev
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
