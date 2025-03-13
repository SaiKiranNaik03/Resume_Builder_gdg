import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../public/gdg_White.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/50 border-b border-gray-800/20"
      id="no-print"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-6 w-auto" />
          <h3 className="font-semibold text-xl text-white tracking-wide">
            SmartResume
          </h3>
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          <li>
            <Link
              to="/input"
              className="font-semibold text-gray-300 transition-all duration-300 hover:text-teal-400 hover:scale-110"
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              to="/templates"
              className="font-semibold text-gray-300 transition-all duration-300 hover:text-teal-400 hover:scale-110"
            >
              Templates
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold text-gray-300 transition-all duration-300 hover:text-teal-400 hover:scale-110"
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/gdsciare/"
              target="_blank"
              className="font-semibold text-gray-300 transition-all duration-300 hover:text-teal-400 hover:scale-110"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul
          className="lg:hidden flex flex-col space-y-3 p-4 bg-black/50 backdrop-blur-md text-white shadow-lg rounded-b-lg"
          onClick={() => setIsOpen(false)}
        >
          <li>
            <Link
              to="/input"
              className="block text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-white"
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              to="/templates"
              className="block text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-white"
            >
              Templates
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-white"
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/gdsciare/"
              target="_blank"
              className="block text-lg font-semibold text-gray-300 transition-all duration-300 hover:text-white"
            >
              GitHub
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
