import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PartnerIcon from "@mui/icons-material/Handshake";
import { NavLink } from "react-router-dom";
// import aws from "../../../../assets/aws.svg";
import { colors } from "../../../Utils/styles";
import { useSelector } from "react-redux";

const Sidebar = ({ slide }) => {

  const role = useSelector(state => state.user.role)
  const navPages = { 1: { path: "users", icon: "PeopleAltIcon", name: "Users" }, 2: { path: "onboarding", icon: "PartnerIcon", name: "Onboarding" }, 3: { path: "costexplorer", icon: "DashboardIcon", name: "Cost Explorer" }, 4: { path: "awsservice", icon: "AWS", name: "AWS Service" } }
  const CUSTOMER = { 1: { path: "costexplorer", icon: "DashboardIcon", name: "Cost Explorer" }, 2: { path: "awsservice", icon: "AWS", name: "AWS Service" } }

  const iconMap = {
    PeopleAltIcon,
    PartnerIcon,
    DashboardIcon,
    AWS: () => <span className={`font-bold text-[${colors.bgCol}]`}>AWS</span>
  };


  return (
    <aside
      className={`fixed p-2 left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-xl transition-all duration-300 ${slide ? "w-[280px]" : "w-[100px]"} z-40`}
    >
      <ul className="pt-5 space-y-2">
        {Object.values(role == "CUSTOMER" ? CUSTOMER : navPages).map(nav => {
          const Icon = iconMap[nav.icon]
          return (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive }) => `flex items-center p-5 hover:bg-[#f1fafe]${isActive ? "bg-[#f1fafe]" : ""}`}>
              <Icon style={{ color: colors.bgCol }} fontSize="large" />
              <span className={`ml-4 ${slide ? "block" : "hidden"}`}>
                {nav.name}
              </span>
            </NavLink>
          );
        })}
      </ul>

      {/* CONTACT */}
      <div className="absolute bottom-1 w-full p-1 px-5">
        <button className="w-full py-1 border rounded font-bold text-[#0a3ca2] shadow-md">
          {slide ? "Contact Us" : "📞"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
