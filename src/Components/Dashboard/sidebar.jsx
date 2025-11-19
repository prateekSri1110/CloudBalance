import { colors, otherStyle } from "./styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PartnerIcon from "@mui/icons-material/Handshake";
import DashboardIcon from "@mui/icons-material/DashboardCustomize";
import ModuleIcon from "@mui/icons-material/ViewModule";
import TagsIcon from "@mui/icons-material/TurnedIn";
import PermissionIcon from "@mui/icons-material/Security";
import ValidationIcon from "@mui/icons-material/CloudDone";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import Footer from "./footer";
import Content from "./Content";

const Sidebar = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-1/6 h-screen shadow-xl">
          <ul>
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
        <Content />
      </div>
    </>
  );
};

export default Sidebar;
