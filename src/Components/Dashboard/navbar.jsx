import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../../assets/cloudBalance.png";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../Utils/styles";
import { useEffect, useState } from "react";
import api from "../Utils/axios";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, emailId, role, slide } = useSelector((state) => ({
    name: state.user.name,
    emailId: state.user.emailId,
    role: state.user.role,
    slide: state.slide,
  }));

  console.log(name, emailId, role);

  const [accounts, setAccounts] = useState([])
  useEffect(() => {
    const endpoint = (role === 'CUSTOMER') ? "/users/useraccounts" : "/accounts";
    (async () => {
      const res = await api.get(endpoint, {
        params: {
          emailId: emailId
        }
      })
      dispatch({ type: "loadAccounts", payload: res?.data })
      console.log("accounts data : ", res?.data);
      setAccounts(Object.values(res?.data))
    })()
  }, [])

  const toggleSlide = () => {
    dispatch({ type: "Slide", payload: !slide });
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white shadow-xl flex items-center justify-between px-5 z-50">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="cloudkeeper" className="h-10" />

        <button onClick={toggleSlide} className="cursor-pointer">
          <MenuIcon style={{ color: colors.bgCol }} fontSize="large" />
        </button>

        {/* dropdown */}
        {role === 'CUSTOMER' ? (
          <div className="flex items-center space-x-8">
            <div className="flex flex-col text-sm">
              <h4 className="font-semibold text-gray-700 leading-none">Accounts</h4>
              <div className="relative inline-block">
                <select
                  defaultValue="Select Role"
                  className="appearance-none text-gray-800 focus:outline-none pr-6 text-base"
                >
                  <option value="">Select Account</option>
                  {accounts?.map((acc) => (
                    <option key={acc.accountId} value={acc.accountId}>
                      {acc.accountName}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-blue-500">
                  <RiArrowDropDownLine size={27} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>


      {/* RIGHT */}
      <div className="flex items-center gap-1">
        <UserIcon style={{ color: colors.bgCol }} fontSize="large" />

        <div className="hidden sm:block">
          <p className="text-sm">Welcome,</p>
          <span style={{ color: colors.bgCol }} className="font-bold text-lg" >
            {name}
          </span>
        </div>

        <MoreVertIcon style={{ color: colors.bgCol }} fontSize="large" />

        <button
          onClick={() => {
            localStorage.clear();
            dispatch({ type: "LOGOUT" })
            navigate("/login");
          }}
          className="flex items-center gap-1 px-3 py-1 border rounded hover:shadow-md">
          <LogoutIcon fontSize="medium" />
          <span className="font-bold hidden md:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
