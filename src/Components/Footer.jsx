// import logo from "/gdg_logo.png";
// import insta from "/instagram-logo.png";
// import linkedin from "/linkedin_logo.png";
// import logo_gray from "/GDG_logo_gray.png";

// const Footer = () => {
//   return (
//     <footer
//       className=" bottom-0 w-full bg-transparent shadow-md backdrop-blur-3xl "
//       id="no-print"
//     >
//       <div className="flex flex-col md:flex-row items-center justify-between p-6 lg:px-8 mx-auto max-w-6xl">
//         {/* Left Section - Organization Info */}
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="logo" className="h-5" />
//             <h3 className="font-semibold text-lg">GDGC IARE</h3>
//           </div>
//           <p className="text-sm text-gray-600">
//             Developed by GDGC IARE Programming Team:
//           </p>
//           <p className="text-sm">
//             <span className="font-semibold">Vishwanath Reddy (Lead)</span>{" "}
//             &nbsp;
//             <a
//               href="https://vishureddy.vercel.app"
//               className="text-blue-600 hover:underline"
//             >
//               About
//             </a>
//           </p>
//           <p className="text-sm">
//             <span className="font-semibold">Sai Kiran Naik (Co-Lead)</span>{" "}
//             &nbsp;
//             <a
//               href="https://saikiran-dev.vercel.app"
//               className="text-blue-600 hover:underline"
//             >
//               About
//             </a>
//           </p>
//         </div>

//         {/* Right Section - Social Links */}
//         <div className="mt-4 md:mt-0">
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-2">
//               <img src={insta} alt="Instagram" className="h-5" />
//               <a
//                 href="https://www.instagram.com/gdgc.iare/"
//                 className="text-sm text-gray-700 hover:text-blue-500 font-semibold"
//               >
//                 @gdgc.iare
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <img src={linkedin} alt="LinkedIn" className="h-6" />
//               <a
//                 href="https://www.linkedin.com/company/82561543/"
//                 className="text-sm text-gray-700 hover:text-blue-500 font-semibold"
//               >
//                 GDGC IARE
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <img src={logo_gray} alt="GDG Community" className="h-4 w-5" />
//               <a
//                 href="https://gdg.community.dev/"
//                 className="text-sm text-gray-700 hover:text-blue-500 font-semibold"
//               >
//                 gdg.community.dev
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

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
