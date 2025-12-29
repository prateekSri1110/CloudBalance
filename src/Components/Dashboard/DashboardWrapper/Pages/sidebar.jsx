import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PartnerIcon from "@mui/icons-material/Handshake";
import { NavLink } from "react-router-dom";
import aws from "../../../../assets/aws.svg";
import { colors } from "../../../Utils/styles";

const Sidebar = ({ slide }) => {
  return (
    <aside
      className={`fixed p-2 left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-xl transition-all duration-300 ${slide ? "w-[280px]" : "w-[100px]"} z-40`}
    >
      <ul className="pt-5 space-y-2">
        {/* USERS */}
        <NavLink
          to="users"
          className={({ isActive }) =>
            `flex items-center p-5 hover:bg-[#f1fafe]
             ${isActive ? "bg-[#f1fafe]" : ""}`
          }
        >
          <PeopleAltIcon style={{ color: colors.bgCol }} fontSize="large" />
          <span className={`ml-4 ${slide ? "block" : "hidden"}`}>
            Users
          </span>
        </NavLink>

        {/* ONBOARDING */}
        <NavLink
          to="onboarding"
          className={({ isActive }) =>
            `flex items-center p-5 hover:bg-[#f1fafe]
             ${isActive ? "bg-[#f1fafe]" : ""}`
          }
        >
          <PartnerIcon style={{ color: colors.bgCol }} fontSize="large" />
          <span className={`ml-4 ${slide ? "block" : "hidden"}`}>
            Onboarding
          </span>
        </NavLink>

        {/* COST EXPLORER */}
        <NavLink
          to="costexplorer"
          className={({ isActive }) =>
            `flex items-center p-5 hover:bg-[#f1fafe]
             ${isActive ? "bg-[#f1fafe]" : ""}`
          }
        >
          <DashboardIcon style={{ color: colors.bgCol }} fontSize="large" />
          <span className={`ml-4 ${slide ? "block" : "hidden"}`}>
            Cost Explorer
          </span>
        </NavLink>

        {/* AWS */}
        <NavLink
          to="awsservice"
          className={({ isActive }) =>
            `flex items-center p-5 hover:bg-[#f1fafe]
             ${isActive ? "bg-[#f1fafe]" : ""}`
          }
        >
          <img src={aws} className="w-8" />
          <span className={`ml-4 ${slide ? "block" : "hidden"}`}>
            AWS Service
          </span>
        </NavLink>
      </ul>

      {/* CONTACT */}
      <div className="absolute bottom-2 w-full p-2 px-4">
        <button className="w-full py-2 border rounded font-bold text-[#0a3ca2] shadow-md">
          {slide ? "Contact Us" : "📞"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
