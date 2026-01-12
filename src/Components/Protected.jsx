import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import api from "./Utils/axios";

export const Protected = ({ children, roles }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = useSelector(state => state.user);

  if (token == null) {
    console.log("token unavailable");
    navigate('/')
  }

  useEffect(() => {
    (async () => {
      if (token && user.role == '') {
        const profile = await api.get('/users/profile')
        dispatch({ type: "authenticated" })
        dispatch({ type: "UserDetails", payload: profile.data })
        console.log("inside : ", profile.data.role);

        if (Array.isArray(roles) && !roles.includes(profile.data.role))
          navigate('/unauthorized')
      }
      console.log("im runing", roles, " role : ", user.role);

      if (!roles.includes(user.role)) return <Navigate to="/unauthorized" replace />
    })()
  }, [dispatch, navigate, token, roles, user.role])


  return children;
};
