import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ToggleOff from "@mui/icons-material/ToggleOff";
import ToggleOn from "@mui/icons-material/ToggleOn";
import Edit from "@mui/icons-material/Edit";
import Reset from "@mui/icons-material/RotateLeft";
import DeleteIcon from "@mui/icons-material/Delete";
import { ActiveUser, HandleToggle, DeleteUser } from "./UserLogics/userLogic";
import { colors } from "../../../../../Utils/styles";
import Breadcrumbs from "../../../../../Utils/breadcrumbs.jsx";
import api from "../../../../../Utils/axios";

const User = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [active, setActive] = useState(true);
  const [update, setUpdate] = useState(true);

  const { role } = useSelector((state) => ({
    role: state.user.role,
  }));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api(`/allUsers`)
        setData(res.data)

        const activeUsers = res.data.filter((user) => user.active);
        setActiveData(activeUsers);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers()
  }, [update]);

  return (
    <>
      <Breadcrumbs />
      <div className="p-2">
        <h1 className="font-bold text-2xl mb-5">Users</h1>

        <div className="bg-white p-5 w-full overflow-auto shadow rounded-md">
          <div className="w-full flex justify-between">
            <div>
              <button
                className="p-2 bg-[#0a3ca2] text-white rounded font-bold mb-4 cursor-pointer"
                onClick={() => navigate("addUser")}
                hidden={role == "READONLY"}
              >
                <AddIcon className="mb-1" color={colors.bgCol} /> Add New User
              </button>
              <span className="text-gray-300 text-xl">|</span>
              <span className="py-3 cursor-pointer">
                <Reset />
                Reset Filters
              </span>
            </div>

            <div>
              <div className="border border-[#0a3ca2] flex items-center rounded-full px-2 py-1">
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-all ${!active ? "bg-[#0a3ca2] text-white" : "text-[#0a3ca2]-800 cursor-pointer"
                    } `}
                  onClick={() => setActive(active ? !active : active)}
                >
                  Active ({ActiveUser(data)})
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-all ${active ? "bg-[#0a3ca2] text-white" : "text-[#0a3ca2]-800 cursor-pointer"
                    } `}
                  onClick={() => setActive(!active)}
                >
                  All ({data.length})
                </button>
              </div>
            </div>
          </div>

          <table className="min-w-full text-sm border border-blue-100 text-left">
            <thead style={{ backgroundColor: colors.main }}>
              <tr style={{ color: colors.bgCol }}>
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Last Name</th>
                <th className="px-4 py-2">Email ID</th>
                <th className="px-4 py-2">Roles</th>
                <th className="px-4 py-2">Last Login</th>
                <th hidden={role == "READONLY"} className="px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {(!active ? activeData : data).map((user, index) => (
                <tr key={index} className="even:bg-white odd:bg-gray-100">
                  <td className="px-4 py-2">{user.firstName}</td>
                  <td className="px-4 py-2">{user.lastName}</td>
                  <td className="px-4 py-2">{user.emailId}</td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-100 border border-1 px-2 rounded">
                      {user.role}
                    </button>
                  </td>
                  <td className="px-4 py-2 text-sm">{user.lastLogin}</td>
                  <td className="px-4 py-2" hidden={role == "READONLY"}>
                    <div className="flex gap-5">
                      <button
                        onClick={() => {
                          HandleToggle(user.emailId)
                          setUpdate(!update)
                        }}
                      >
                        {user.active ? (
                          <ToggleOn
                            style={{ color: colors.bgCol, cursor: "pointer" }}
                            fontSize="large"
                          />
                        ) : (
                          <ToggleOff fontSize="large" />
                        )}
                      </button>
                      <button
                        onClick={() =>
                          navigate("addUser", {
                            state: {
                              firstName: user.firstName,
                              lastName: user.lastName,
                              emailId: user.emailId,
                              role: user.role,
                            },
                          })
                        }
                      >
                        <Edit
                          style={{ color: colors.bgCol, cursor: "pointer" }}
                        />
                      </button>

                      {/* delete */}
                      <button
                        onClick={() => {
                          DeleteUser(user.emailId)
                          setUpdate(!update)
                        }}
                      >
                        <DeleteIcon style={{ color: colors.bgCol, cursor: "pointer" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
