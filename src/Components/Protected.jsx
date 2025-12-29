import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated")

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
