import { Link } from "react-router-dom";

import { Navbar } from "./style";

import logo from "../../../assets/images/logo.svg";
import avatar from "../../../assets/images/avatars.svg";
import menuToggle from "../../../assets/images/menu-toggle.svg";

const ToggleOn = () => {
  return (
    <Navbar>
      <header>
        <img src={logo} alt="" />
        <img src={menuToggle} alt="toggle" />
      </header>

      <nav>
        <ul>
          <li className="active">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard">Posts</Link>
          </li>
        </ul>
      </nav>

      <footer>
        <img src={avatar} alt="Avatar" />
        <div>
          <h3>Nafisa Sh.</h3>
          <span>Support manager</span>
        </div>
      </footer>
    </Navbar>
  );
};

export { ToggleOn };
