import { useNavigate } from "react-router-dom";
import logo from "../assets/cloudBalance.png";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let newErrors = {};

    // Email required
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      // Wrong email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Password required
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // true if no errors
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if errors

    dispatch({ type: "Login", payload: { email, password } });

    navigate("/dashboard/users");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="lg:w-150" onSubmit={handleLogin}>
        <div className="flex justify-center mb-5">
          <img src={logo} width={300} alt="CloudKeeper" />
        </div>

        {/* EMAIL FIELD */}
        <div className="mb-5">
          <label style={{ color: colors.main }}>Email</label>

          <input
            type="email"
            className={`block border text-lg px-5 py-3 w-full rounded
              ${errors.email ? "border-red-500" : "border-blue-200"}
            `}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
            placeholder="Email"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* PASSWORD FIELD */}
        <div className="mb-5">
          <label style={{ color: colors.main }}>Password</label>

          <input
            type="password"
            className={`block border text-lg px-5 py-3 w-full rounded
              ${errors.password ? "border-red-500" : "border-blue-200"}
            `}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
            placeholder="Password"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
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
