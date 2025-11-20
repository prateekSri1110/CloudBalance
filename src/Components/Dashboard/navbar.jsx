import logo from "../../assets/cloudBalance.png";
import MenuIcon from "@mui/icons-material/Menu";
import User from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { colors } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = ({ slide, setSlide }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* fixed top-0 left-0 */}
        <nav className="w-full shadow-xl">
          <div className="grid grid-cols-2">
            <div className="flex justify-start realtive">
              <div className="px-5 py-1">
                <img src={logo} width={250} alt="cloudkeeper" />
              </div>

              <div className="py-5 px-4">
                <button
                  className="cursor-pointer"
                  onClick={() => setSlide(!slide)}
                >
                  <MenuIcon style={{ color: colors.main }} fontSize="large" />
                </button>{" "}
                {/* <Sidebar slide={slide} setSlide={setSlide} /> */}
              </div>
            </div>

            <div className="flex justify-end">
              <div className="px-2 py-5">
                <User style={{ color: colors.main }} fontSize="large" />
              </div>
              <div className="py-3">
                <p className="text-sm">Welcome,</p>
                <span style={{ color: "blue" }} className="font-bold text-lg">
                  Prateek Srivastava
                </span>
              </div>

              <MoreVertIcon
                style={{ color: colors.main, marginTop: "20px" }}
                fontSize="large"
              />

              <div className="px-2 py-5">
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="p-1 hover:bg-blue-700 hover:text-white font-medium border rounded cursor-pointer"
                >
                  <LogoutIcon
                    style={{ color: colors.main }}
                    fontSize="medium"
                  />
                  <span className="font-bold px-3">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
