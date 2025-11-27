import { useNavigate } from "react-router-dom";
import logo from "../assets/cloudBalance.png";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const cred = { email, password };
    console.log(email, "   ", password);
    dispatch({ type: "Login", payload: cred });
    navigate("/dashboard/users");
    console.log("here");
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form className="lg:w-150">
          <div className="flex justify-center mb-5">
            <img src={logo} width={300} alt="CloudKeeper" />
          </div>
          <div className="mb-5">
            <label style={{ color: colors.main }} className="mb-4">
              Email
            </label>
            <input
              type="email"
              className="block border text-lg  px-5 py-3 w-full rounded border border-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-5">
            <label style={{ color: colors.main }} className="mb-4">
              Password
            </label>
            <input
              type="password"
              className="block border text-lg px-5 py-3 w-full rounded border border-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button
            className="mt-5 font-bold text-white px-4 py-4 w-full rounded-md hover:bg-blue-700"
            type="submit"
            style={{ backgroundColor: colors.main }}
            onClick={handleLogin}
          >
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

const colors = {
  main: "#1f75b6",
};
