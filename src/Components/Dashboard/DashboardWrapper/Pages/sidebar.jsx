import { colors, otherStyle } from "../../styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Onboard from "@mui/icons-material/AirplaneTicket";
import Cost from "@mui/icons-material/AttachMoney";
import { FaAws } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = ({ slide }) => {
  return (
    <>
      <div className="relative fixed left-0">
        <div
          className={`h-[995px] shadow-xl bg-white transition-transform duration-300 ${
            slide ? "translate-x-0 w-[350px]" : "-translate-x-full w-20"
          }`}
        >
          <ul>
            <NavLink
              to="users"
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
            >
              <li className={otherStyle.li}>
                <PeopleAltIcon
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.main,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  User Management
                </span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="partner"
            >
              <li className={otherStyle.li}>
                <Onboard
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.main,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Onboarding
                </span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="tags"
            >
              <li className={otherStyle.li}>
                <Cost
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.main,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Cost Explorer
                </span>
              </li>
            </NavLink>
            <li className={otherStyle.li}>
              <FaAws
                fontSize="larger"
                style={{
                  marginLeft: !slide ? "85px" : "",
                  color: colors.main,
                }}
              />
              <span className={`px-5 ${slide ? "" : "hidden"}`}>
                AWS Explorer
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
