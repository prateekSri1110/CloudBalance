import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protected = ({ children, roles }) => {
  const { role, isAuthenticated } = useSelector(state => ({
    role: state.user.role, isAuthenticated: state.isAuthenticated,
  }))

  if (!isAuthenticated) return <Navigate to="/" replace />

  if (!roles.includes(role)) return <Navigate to="/unauthorized" replace />

  return children;
};
