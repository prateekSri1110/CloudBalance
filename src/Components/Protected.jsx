import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log("login : ", isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};
