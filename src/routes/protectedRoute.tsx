import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  access,
  redirect = "/",
  children,
}: {
  access: boolean;
  redirect?: string;
  children: ReactNode;
}) => {
  if (!access) {
    return <Navigate to={redirect} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
