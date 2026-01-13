import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import api from "./Utils/axios";

export const Protected = ({ children, roles }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = useSelector(state => state.user);


  useEffect(() => {
    if (token == null) {
      console.log("token unavailable");
      navigate("/login")
    }
    (async () => {
      if (token && user.role == '') {
        const profile = await api.get('/users/profile').catch(() => navigate("/login"))
        dispatch({ type: "authenticated" })
        dispatch({ type: "UserDetails", payload: profile.data })

        if (Array.isArray(roles) && !roles.includes(profile.data.role))
          navigate('/unauthorized')
      }

      if (!roles.includes(user.role)) return <Navigate to="/unauthorized" replace />
    })()
  }, [dispatch, navigate, token, roles, user.role])

  return children;
};
