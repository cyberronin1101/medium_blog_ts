import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";

const HeaderUserNav = () => {
  const [currentUser] = useContext(CurrentUserContext);

  return (
    <>
      {!currentUser.isLoggedIn && !currentUser.isLoading && (
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
            <NavLink to={"/article/new"} className={"nav-link"}>
              <i className={"ion-compose"}></i>&nbsp;New Article
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
    </>
  );
};

export default HeaderUserNav;
