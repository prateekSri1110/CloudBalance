import logo from "../../assets/cloudBalance.png";
import MenuIcon from "@mui/icons-material/Menu";
import User from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { colors } from "./styles";

const Navbar = () => {
  return (
    <>
      <nav className="container-fluid shadow-xl">
        <div className="w-full p-2 flex">
          <div className="w-1/2  flex justify-start">
            <div className="px-5 py-1">
              <img src={logo} width={250} alt="cloudkeeper" />
            </div>
            <div className="py-5 px-4 ">
              <MenuIcon style={{ color: colors.main }} fontSize="large" />
            </div>
          </div>

          <div className="w-1/2 flex justify-end">
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
              <button className="p-1 hover:bg-blue-700 hover:text-white font-medium border rounded">
                <LogoutIcon style={{ color: colors.main }} fontSize="medium" />
                <span className="font-bold px-3">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
