import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const RoleGuard = ({ roles, children }) => {
  const { user } = useContext(AuthContext);
  if (!roles.includes(user.role)) return <Navigate to="/unauthorized" />;
  return children;
};

export default RoleGuard;