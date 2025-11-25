import { colors, otherStyle } from "../../styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { NavLink } from "react-router-dom";
import Dashboard from "@mui/icons-material/Dashboard";
import Lock from "@mui/icons-material/LockPerson";
import Partner from "@mui/icons-material/Handshake";
import Module from "@mui/icons-material/ViewModule";
import Validation from "@mui/icons-material/Beenhere";

const Sidebar = ({ slide }) => {
  return (
    <>
      <div className="relative fixed left-0 p-3">
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
                    color: colors.bgCol,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>Users</span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="partnermanagement"
            >
              <li className={otherStyle.li}>
                <Partner
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.bgCol,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Partner Management
                </span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="dashboardcontrolgrid"
            >
              <li className={otherStyle.li}>
                <Dashboard
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.bgCol,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Dashboard Control Grid
                </span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="modulecontrolgrid"
            >
              <li className={otherStyle.li}>
                <Module
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.bgCol,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Module Control Grid
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
                <Lock
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.bgCol,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>Tags</span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="permissiongroup"
            >
              <li className={otherStyle.li}>
                <Lock
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.bgCol,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Permission Group
                </span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="validationgrooup"
            >
              <li className={otherStyle.li}>
                <Validation
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.bgCol,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Validation Bridge
                </span>
              </li>
            </NavLink>
          </ul>
          <button className="w-full fixed bottom-5 px-3 py-2 font-bold border-1 text-[#0a3ca2] shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
