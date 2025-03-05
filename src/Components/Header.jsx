import logo from "../../public/gdg_logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <img src={logo} alt="logo" className="h-5 w-auto" />
        <ul className="flex space-x-6">
          <li className="link">
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <a href="https://github.com/gdsciare/" target="_blank">
              github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
