import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

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
      <NavLink to={to} end className={"nav-link"}>
        {children}
      </NavLink>
    </li>
  );
};

const FeedToggler = ({ tagName }: propsType): JSX.Element => {
  return (
    <div className={"feed-toggle"}>
      <ul className={"nav nav-pills outline-active"}>
        <TogglerItem to={"/feed"}>You feed</TogglerItem>
        <TogglerItem to={"/"}>Global feed</TogglerItem>
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