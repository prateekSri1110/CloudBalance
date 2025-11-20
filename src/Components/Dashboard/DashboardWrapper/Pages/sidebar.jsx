import { colors, otherStyle } from "../../styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PartnerIcon from "@mui/icons-material/Handshake";
import DashboardIcon from "@mui/icons-material/DashboardCustomize";
import ModuleIcon from "@mui/icons-material/ViewModule";
import TagsIcon from "@mui/icons-material/TurnedIn";
import PermissionIcon from "@mui/icons-material/Security";
import ValidationIcon from "@mui/icons-material/CloudDone";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import Content from "./Content";

const Sidebar = ({ slide }) => {
  return (
    <>
      <div>
        <div
          className={` h-screen shadow-xl bg-white transition-transform duration-300 ${
            slide ? "translate-x-0 w-[350px]" : "-translate-x-full w-0"
          }`}
        >
          <ul className={slide ? "block" : "hidden"}>
            <li className="p-5">
              <button className={otherStyle.button}>
                {" "}
                Switch to Lens
                <ArrowIcon fontSize="large" />
              </button>
            </li>
            <li className={otherStyle.li}>
              <PeopleAltIcon fontSize="large" style={{ color: colors.main }} />
              <span className="px-5">Users</span>
            </li>
            <li className={otherStyle.li}>
              <PartnerIcon fontSize="large" style={{ color: colors.main }} />
              <span className="px-5">Partner Management</span>
            </li>
            <li className={otherStyle.li}>
              <DashboardIcon fontSize="large" style={{ color: colors.main }} />
              <span className="px-5">Dashboard Control Grid</span>
            </li>
            <li className={otherStyle.li}>
              <ModuleIcon fontSize="large" style={{ color: colors.main }} />
              <span className="px-5">Module Control Grid</span>
            </li>
            <li className={otherStyle.li}>
              <TagsIcon fontSize="large" style={{ color: colors.main }} />
              <span className="px-5">Tags</span>
            </li>
            <li className={otherStyle.li}>
              <PermissionIcon fontSize="large" style={{ color: colors.main }} />
              <span className="px-5">Permission Group</span>
            </li>
            <li className={otherStyle.li}>
              <ValidationIcon fontSize="large" style={{ color: colors.main }} />
              <span className="px-5">Validation Bridge</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
