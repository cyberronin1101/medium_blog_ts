import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../context/currentUserContext";

const ProtectedRoute = ({ redirect = "/" }: { redirect?: string }) => {
  const [currentUser] = useContext(CurrentUserContext);

  if (!currentUser.isLoggedIn && !currentUser.isLoading) {
    return <Navigate to={redirect} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
