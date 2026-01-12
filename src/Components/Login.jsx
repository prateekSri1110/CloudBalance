import { useNavigate } from "react-router-dom";
import logo from "../assets/cloudBalance.png";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { api } from "./Utils/axios"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const emailId = useRef();
  const password = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailId.current.value) {
      toast.error("Email is required");
      return;
    }
    if (!password.current.value) {
      toast.error("Password is required");
      return;
    }

    try {
      const res = await api.post("http://localhost:8080/login",
        {
          emailId: emailId.current.value,
          password: password.current.value,
        }
      );

      toast.success("Login Successful!");
      localStorage.setItem("token", res.data)
      dispatch({ type: "authenticated" })
      const userData = await api.get('/users/profile');
      dispatch({ type: "UserDetails", "payload": userData.data })

      navigate(userData.data.role == "CUSTOMER" ? "/dashboard/costexplorer" : "/dashboard/users");
    } catch (err) {
      console.error("Login error:", err);
      const message = err?.response?.data || "Invalid email or password";
      toast.error(message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="lg:w-150" onSubmit={handleLogin}>
        <div className="flex justify-center mb-5">
          <img src={logo} width={300} alt="CloudKeeper" />
        </div>

        <div className="mb-5">
          <label style={{ color: colors.main }}>Email <span className="text-red-600">*</span></label>
          <input
            ref={emailId}
            type="email"
            name="emailId"
            className="block border text-lg px-5 py-3 w-full rounded"
            placeholder="Email"
            autoComplete="current-email"
          />
        </div>

        <div className="mb-5">
          <label style={{ color: colors.main }}>Password <span className="text-red-600">*</span></label>
          <input
            ref={password}
            type="password"
            name="password"
            className="block border text-lg px-5 py-3 w-full rounded"
            autoComplete="current-password"
            placeholder="Password"
          />
        </div>

        <button
          className="mt-5 font-bold text-white px-4 py-4 w-full rounded-md hover:bg-blue-700"
          type="submit"
          style={{ backgroundColor: colors.main }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;

const colors = {
  main: "#1f75b6",
};
