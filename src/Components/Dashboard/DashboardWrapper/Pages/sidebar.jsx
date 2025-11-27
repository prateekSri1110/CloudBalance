import { colors, otherStyle } from "../../styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { NavLink } from "react-router-dom";
import Dashboard from "@mui/icons-material/Dashboard";
import Partner from "@mui/icons-material/Handshake";
import Module from "@mui/icons-material/ViewModule";

const Sidebar = ({ slide }) => {
  return (
    <>
      <div className="relative fixed left-0 p-3">
        <div
          className={`h-[995px] shadow-xl bg-white transition-transform duration-300 ${
            slide ? "translate-x-0 w-[270px]" : "-translate-x-full w-20"
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
              to="onboarding"
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
                  Onboarding
                </span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="costexplorer"
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
                  Cost Explorer
                </span>
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex ${isActive ? "bg-[#f1fafe]" : ""}`
              }
              to="awsservice"
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
                  AWS Service
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
