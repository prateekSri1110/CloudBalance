import { useNavigate } from "react-router-dom";
import logo from "../assets/cloudBalance.png";
import { useRef } from "react";
import axios, { AxiosHeaders } from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const emailId = useRef();
  const password = useRef();
  const port = import.meta.env.VITE_API_PORT;
  console.log(port);

  // console.log("rerender");

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
      const res = await axios.post(
        `http://localhost:${port}/users/login`,
        {
          emailId: emailId.current.value,
          password: password.current.value,
        },
      );

      console.log("*** res", res.data);

      sessionStorage.setItem("userData", JSON.stringify(res.data));
      sessionStorage.setItem("isLoggedIn", "true");
      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/dashboard/users");
      }, 300);
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
          <label style={{ color: colors.main }}>Email</label>

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
          <label style={{ color: colors.main }}>Password</label>

          <input
            ref={password}
            type="password"
            name="password"
            className="block border text-lg px-5 py-3 w-full rounded"
            autoComplete="current-password"
            placeholder="Password"
          />
        </div>

        {/* LOGIN BUTTON */}
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
