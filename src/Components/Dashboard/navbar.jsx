import logo from "../../assets/cloudBalance.png";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../Utils/styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, slide } = useSelector((state) => ({
    name: state.user.name,
    slide: state.slide,
  }));

  const toggleSlide = () => {
    dispatch({ type: "Slide", payload: !slide });
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-xl flex items-center justify-between px-5 z-50">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="cloudkeeper" className="h-10" />

        <button onClick={toggleSlide} className="cursor-pointer">
          <MenuIcon style={{ color: colors.bgCol }} fontSize="large" />
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-1">
        <UserIcon style={{ color: colors.bgCol }} fontSize="large" />

        <div className="hidden sm:block">
          <p className="text-sm">Welcome,</p>
          <span style={{ color: colors.bgCol }} className="font-bold text-lg" >
            {name}
          </span>
        </div>

        <MoreVertIcon style={{ color: colors.bgCol }} fontSize="large" />

        <button
          onClick={() => {
            localStorage.clear();
            dispatch({ type: "LOGOUT" })
            navigate("/login");
          }}
          className="flex items-center gap-1 px-3 py-1 border rounded hover:shadow-md">
          <LogoutIcon fontSize="medium" />
          <span className="font-bold hidden md:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
