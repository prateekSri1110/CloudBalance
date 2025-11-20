import { colors, otherStyle } from "../../styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PartnerIcon from "@mui/icons-material/Handshake";
import DashboardIcon from "@mui/icons-material/DashboardCustomize";
import ModuleIcon from "@mui/icons-material/ViewModule";
import TagsIcon from "@mui/icons-material/TurnedIn";
import PermissionIcon from "@mui/icons-material/Security";
import ValidationIcon from "@mui/icons-material/CloudDone";
import { Link } from "react-router-dom";
// import ArrowIcon from "@mui/icons-material/ArrowForward";

const Sidebar = ({ slide }) => {
  return (
    <>
      <div className="relative fixed left-0 z-1">
        <div
          className={`h-[995px] shadow-xl bg-white transition-transform duration-300 ${
            slide ? "translate-x-0 w-[350px]" : "-translate-x-full w-20"
          }`}
        >
          {/* className={slide ? "block" : "hidden"} */}
          <ul>
            {/* <li className="p-5">
              <button className={otherStyle.button}>
                {" "}
                Switch to Lens
                <ArrowIcon fontSize="large" />
              </button>
            </li> */}

            <Link to="users">
              <li className={otherStyle.li}>
                <PeopleAltIcon
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.main,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>Users</span>
              </li>
            </Link>
            <Link to="partner">
              <li className={otherStyle.li}>
                <PartnerIcon
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.main,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Partner Management
                </span>
              </li>
            </Link>
            <Link to="tags">
              <li className={otherStyle.li}>
                <DashboardIcon
                  fontSize="large"
                  style={{
                    marginLeft: !slide ? "85px" : "",
                    color: colors.main,
                  }}
                />
                <span className={`px-5 ${slide ? "" : "hidden"}`}>
                  Dashboard Control Grid
                </span>
              </li>
            </Link>
            <li className={otherStyle.li}>
              <ModuleIcon
                fontSize="large"
                style={{ marginLeft: !slide ? "85px" : "", color: colors.main }}
              />
              <span className={`px-5 ${slide ? "" : "hidden"}`}>
                Module Control Grid
              </span>
            </li>
            <li className={otherStyle.li}>
              <TagsIcon
                fontSize="large"
                style={{ marginLeft: !slide ? "85px" : "", color: colors.main }}
              />
              <span className={`px-5 ${slide ? "" : "hidden"}`}>Tags</span>
            </li>
            <li className={otherStyle.li}>
              <PermissionIcon
                fontSize="large"
                style={{ marginLeft: !slide ? "85px" : "", color: colors.main }}
              />
              <span className={`px-5 ${slide ? "" : "hidden"}`}>
                Permission Group
              </span>
            </li>
            <li className={otherStyle.li}>
              <ValidationIcon
                fontSize="large"
                style={{ marginLeft: !slide ? "85px" : "", color: colors.main }}
              />
              <span className={`px-5 ${slide ? "" : "hidden"}`}>
                Validation Bridge
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
