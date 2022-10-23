import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";

const HeaderUserPanel = () => {
  let [currentUser] = useContext(CurrentUserContext);

  if (currentUser.isLoggedIn === false) {
    return (
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
    );
  }

  // if (currentUser.isLoggedIn) {
  //
  //   let user = currentUser.currentUser;
  //   return (
  //     <>
  //       <li className={"nav-item"}>
  //         <NavLink to={"/articles/new"} className={"nav-link"}>
  //           <i className={"ion-compose"}></i>&nbsp;New post
  //         </NavLink>
  //       </li>
  //       <li className={"nav-item"}>
  //         <NavLink
  //           to={`/profiles/${user.username}`}
  //           className={"nav-link"}
  //         >
  //           <img
  //             className={"user-pic"}
  //             src={user.image}
  //             alt={user.username + " image"}
  //           />
  //           &nbsp;{user.username}
  //         </NavLink>
  //       </li>
  //     </>
  //   );
  // }
};

export default HeaderUserPanel;
