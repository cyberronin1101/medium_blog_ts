import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";

const TopBar = () => {
  let [currentUser] = useContext(CurrentUserContext);

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

          {!currentUser.isLoggedIn && (
            <>
              <li className={"nav-item"}>
                <NavLink to={"/login"} className={"nav-link"}>
                  Sign in
                </NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink to={"/register"} className={"nav-link"}>
                  Sign up
                </NavLink>
              </li>
            </>
          )}
          {currentUser.isLoggedIn && currentUser.currentUser && (
            <>
              <li className={"nav-item"}>
                <NavLink to={"/articles/new"} className={"nav-link"}>
                  <i className={"ion-compose"}></i>&nbsp;New post
                </NavLink>
              </li>
              <li className={"nav-item"}>
                <NavLink
                  to={`/profiles/${currentUser.currentUser.username}`}
                  className={"nav-link"}
                >
                  <img
                    className={"user-pic"}
                    src={currentUser.currentUser.image}
                    alt={currentUser.currentUser.username + " image"}
                  />
                  &nbsp;{currentUser.currentUser.username}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
