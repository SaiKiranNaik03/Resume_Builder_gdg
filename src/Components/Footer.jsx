import logo from "/gdg_logo.png";
import insta from "/instagram-logo.png";
import linkedin from "/linkedin_logo.png";
import logo_gray from "/GDG_logo_gray.png";

const Footer = () => {
  return (
    <footer
      className=" bottom-0 w-full bg-transparent shadow-md backdrop-blur-3xl "
      id="no-print"
    >
      <div className="flex flex-col md:flex-row items-center justify-between p-6 lg:px-8 mx-auto max-w-6xl">
        {/* Left Section - Organization Info */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="h-5" />
            <h3 className="font-semibold text-lg">GDGC IARE</h3>
          </div>
          <p className="text-sm text-gray-600">
            Developed by GDGC IARE Programming Team:
          </p>
          <p className="text-sm">
            <span className="font-semibold">Vishwanath Reddy (Lead)</span>{" "}
            &nbsp;
            <a
              href="https://vishureddy.vercel.app"
              className="text-blue-600 hover:underline"
            >
              About
            </a>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Sai Kiran Naik (Co-Lead)</span>{" "}
            &nbsp;
            <a
              href="https://saikiran-dev.vercel.app"
              className="text-blue-600 hover:underline"
            >
              About
            </a>
          </p>
        </div>

        {/* Right Section - Social Links */}
        <div className="mt-4 md:mt-0">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <img src={insta} alt="Instagram" className="h-5" />
              <a
                href="https://www.instagram.com/gdgc.iare/"
                className="text-sm text-gray-700 hover:text-blue-500 font-semibold"
              >
                @gdgc.iare
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img src={linkedin} alt="LinkedIn" className="h-6" />
              <a
                href="https://www.linkedin.com/company/82561543/"
                className="text-sm text-gray-700 hover:text-blue-500 font-semibold"
              >
                GDGC IARE
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img src={logo_gray} alt="GDG Community" className="h-4 w-5" />
              <a
                href="https://gdg.community.dev/"
                className="text-sm text-gray-700 hover:text-blue-500 font-semibold"
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
