import { useNavigate } from "react-router-dom";
import logo from "../assets/cloudBalance.png";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    if (
      localStorage.getItem("email") == email &&
      localStorage.getItem("password") == password
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard/users");
    } else alert("email or password is incorrect!");
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
            type="email"
            className="block border text-lg px-5 py-3 w-full rounded
              "
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>

        <div className="mb-5">
          <label style={{ color: colors.main }}>Password</label>

          <input
            type="password"
            className="block border text-lg px-5 py-3 w-full rounded
              "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
