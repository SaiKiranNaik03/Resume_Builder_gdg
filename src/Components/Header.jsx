import logo from "../../public/gdg_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="backdrop-blur-3xl ">
      <nav className="mx-auto  flex max-w-7xl items-center justify-between p-6 lg:px-8 ">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="h-6 w-auto" />
          <h3 className="font-semibold text-lg">GDGC IARE</h3>
        </Link>
        <ul className="flex space-x-6">
          <li className="link hover:text-red-500 text-gray-600 font-bold">
            <Link to="/input">Start</Link>
          </li>
          <li className="link hover:text-blue-500 text-gray-600 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="link hover:text-green-500 text-gray-600 font-bold">
            <a href="https://github.com/gdsciare/" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
