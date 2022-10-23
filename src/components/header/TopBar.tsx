import { Link, NavLink } from "react-router-dom";
import HeaderUserNav from "./HeaderUserNav";

const TopBar = () => {
  return (
    <nav className={"navbar navbar-light"}>
      <div className={"container"}>
        <Link to={"/"} className={"navbar-brand"}>
          Medium
        </Link>
        <ul className={"nav navbar-nav pull-xs-right"}>
          <li className={"nav-item"}>
            <NavLink end to={"/"} className={"nav-link"}>
              Home
            </NavLink>
          </li>

          <HeaderUserNav />
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
