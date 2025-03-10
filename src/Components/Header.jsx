import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../public/gdg_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="backdrop-blur-xl shadow-md sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-6 w-auto" />
          <h3 className="font-semibold text-lg">SmartResume</h3>
        </Link>
        
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <ul className={`lg:flex space-x-6 hidden`}>
          <li className="link hover:text-red-500 text-gray-600 font-bold">
            <Link to="/input">Start</Link>
          </li>
          <li className="link hover:text-blue-500 text-gray-600 font-bold">
            <Link to="/templates">Templates</Link>
          </li>
          <li className="link hover:text-green-500 text-gray-600 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="link hover:text-yellow-500 text-gray-600 font-bold">
            <a href="https://github.com/gdsciare/" target="_blank">GitHub</a>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-3 pl-10 px-6 pb-4 shadow-md">
          <li>
            <Link to="/input" className="block py-2 text-gray-600 font-bold" onClick={() => setIsOpen(false)}>
              Start
            </Link>
          </li>
          <li>
            <Link to="/templates" className="block py-2 text-gray-600 font-bold" onClick={() => setIsOpen(false)}>
              Templates
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 text-gray-600 font-bold" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/gdsciare/"
              target="_blank"
              className="block py-2 text-gray-600 font-bold"
              onClick={() => setIsOpen(false)}
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