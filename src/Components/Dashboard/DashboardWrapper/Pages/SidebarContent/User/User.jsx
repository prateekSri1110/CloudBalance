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
import Sort from '@mui/icons-material/SwapVert';

const User = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteringData, setFilteringData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [active, setActive] = useState(true);
  const [update, setUpdate] = useState(true);

  const { role } = useSelector((state) => ({
    role: state.user.role,
  }));

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api(`/users`)
        setData(Object.values(res.data))
        setFilteringData(Object.values(res.data))

        const activeUsers = res.data.filter((user) => user.active);
        setActiveData(activeUsers);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers()
  }, [update]);

  function sortTable(data, sortBy) {
    const sorted = [...data].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    return setFilteringData(sorted)
  }

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
              <span className="text-gray-300 text-3xl px-3">|</span>
              <span className="py-3 cursor-pointer" onClick={() => setFilteringData(data)}>
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
                  Active ({ActiveUser(filteringData)})
                </button>
                <button
                  className={`px-4 py-2 rounded-full font-medium transition-all ${active ? "bg-[#0a3ca2] text-white" : "text-[#0a3ca2]-800 cursor-pointer"
                    } `}
                  onClick={() => setActive(!active)}
                >
                  All ({filteringData.length})
                </button>
              </div>
            </div>
          </div>
          <div className="border border-blue-100 max-h-[calc(65vh)] overflow-y-auto">
            <table className="min-w-full text-sm text-left">
              <thead
                className="sticky top-0 z-10"
                style={{ backgroundColor: colors.main, color: colors.bgCol }}
              >
                <tr>
                  <th className="px-4 py-2 border border-white">
                    First Name
                    <span onClick={() => sortTable(data, "firstName")}>
                      <Sort />
                    </span>
                  </th>
                  <th className="px-4 py-2 border border-white">
                    Last Name
                    <span onClick={() => sortTable(data, "lastName")}>
                      <Sort />
                    </span>
                  </th>
                  <th className="px-4 py-2 border border-white">
                    Email ID
                    <span onClick={() => sortTable(data, "emailId")}>
                      <Sort />
                    </span>
                  </th>
                  <th className="px-4 py-2 border border-white">
                    Roles
                    <span onClick={() => sortTable(data, "role")}>
                      <Sort />
                    </span>
                  </th>
                  <th className="px-4 py-2 border border-white">Last Login</th>
                  <th hidden={role === "READONLY"} className="px-4 py-2 border border-white">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {(!active ? activeData : filteringData).map((user, index) => (
                  <tr key={index} className="even:bg-white odd:bg-gray-100">
                    <td className="px-4 py-2">{user.firstName}</td>
                    <td className="px-4 py-2">{user.lastName}</td>
                    <td className="px-4 py-2">{user.emailId}</td>
                    <td className="px-4 py-2">
                      <button className="bg-blue-100 border px-2 rounded">
                        {user.role}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm">{user.lastLogin}</td>
                    <td className="px-4 py-2" hidden={role === "READONLY"}>
                      <div className="flex gap-5">
                        <button onClick={() => { HandleToggle(user.emailId); setUpdate(!update); }}>
                          {user.active ? <ToggleOn fontSize="large" /> : <ToggleOff fontSize="large" />}
                        </button>

                        <button
                          onClick={() =>
                            navigate("addUser", { state: user })
                          }
                        >
                          <Edit />
                        </button>

                        <button onClick={() => { DeleteUser(user.emailId); setUpdate(!update); }}>
                          <DeleteIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
};

export default User;
