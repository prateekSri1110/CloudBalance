import logo from "../../assets/cloudBalance.png";
import MenuIcon from "@mui/icons-material/Menu";
import User from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { colors } from "./styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, slide } = useSelector((state) => ({
    username: state.user.name,
    slide: state.slide,
  }));

  const setSlide = () => {
    dispatch({ type: "Slide", payload: !slide });
  };

  return (
    <>
      <div>
        {/* fixed top-0 left-0 */}
        <nav className="lg:w-full md:w-800 shadow-xl">
          <div className="grid grid-cols-2">
            <div className="flex justify-start realtive">
              <div className="px-5 py-2">
                <img src={logo} width={250} alt="cloudkeeper" />
              </div>

              <div className="py-5 px-4">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setSlide();
                  }}
                >
                  <MenuIcon style={{ color: colors.bgCol }} fontSize="large" />
                </button>{" "}
                {/* <Sidebar slide={slide} setSlide={setSlide} /> */}
              </div>
            </div>

            <div className="flex justify-end">
              <div className="px-2 py-5">
                <User style={{ color: colors.bgCol }} fontSize="large" />
              </div>
              <div className="py-3">
                <p className="text-sm">Welcome,</p>
                <span
                  style={{ color: colors.bgCol }}
                  className="font-bold text-lg"
                >
                  {username}
                </span>
              </div>

              <MoreVertIcon
                style={{ color: colors.bgCol, marginTop: "20px" }}
                fontSize="large"
              />

              <div className="px-2 py-5">
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="p-1 hover:shadow-xl font-medium border rounded cursor-pointer"
                >
                  <LogoutIcon fontSize="medium" />
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
