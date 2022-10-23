import { NavLink } from "react-router-dom";
import { ReactNode, useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";

type propsType = {
  tagName?: string;
};

type itemPropsType = {
  children?: ReactNode;
  to: string;
};

const TogglerItem = ({ children, to }: itemPropsType): JSX.Element => {
  return (
    <li className={"nav-item"}>
      <NavLink to={to} end={to === "/"} className={"nav-link"}>
        {children}
      </NavLink>
    </li>
  );
};

const FeedToggler = ({ tagName }: propsType): JSX.Element => {
  const [currentUser] = useContext(CurrentUserContext);

  return (
    <div className={"feed-toggle"}>
      <ul className={"nav nav-pills outline-active"}>
        {currentUser.isLoggedIn && (
          <TogglerItem to={"/feed"}>You feed</TogglerItem>
        )}
        <TogglerItem to={"/articles"}>Global feed</TogglerItem>
        {tagName && (
          <TogglerItem to={`/tags/${tagName}`}>
            <i className={"ion-pound"}></i> {tagName}
          </TogglerItem>
        )}
      </ul>
    </div>
  );
};

export default FeedToggler;
