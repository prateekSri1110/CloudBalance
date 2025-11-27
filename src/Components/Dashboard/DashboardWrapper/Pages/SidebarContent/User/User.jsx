import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "../../../../../Data/users";
import { colors } from "../../../../styles";
import AddIcon from "@mui/icons-material/Add";
import ToggleOff from "@mui/icons-material/ToggleOff";
import ToggleOn from "@mui/icons-material/ToggleOn";
import Edit from "@mui/icons-material/Edit";
import ArrowUp from "@mui/icons-material/ArrowUpward";
import Reset from "@mui/icons-material/RotateLeft";
import { Protected } from "../../../../../Protected";

const User = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [act, setAct] = useState(true);

  useEffect(() => {
    const updatedData = usersData?.map((item) => ({
      ...item,
      actions: ["edit", "delete"],
      isActive: false,
    }));
    setData(updatedData);
  }, []);

  const active = () => {
    return data.reduce((count, item) => (item.isActive ? count + 1 : count), 0);
  };

  const handleToggle = (id) => {
    setData((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  return (
    <div className="w-3/4 p-2">
      <Protected />
      <h1 className="font-bold text-2xl mb-5">Users</h1>

      <div className="bg-white p-5 w-full overflow-auto shadow rounded-md">
        <div className="w-full flex justify-between">
          <div>
            <button
              className="p-2 bg-[#0a3ca2] text-white rounded font-bold mb-4 cursor-pointer"
              onClick={() => navigate("addUser")}
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
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  act ? "bg-[#0a3ca2] text-white" : "text-[#0a3ca2]-800"
                }`}
                onClick={() => setAct(!act)}
              >
                Active ({active()})
              </button>
              <button
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  !act ? "bg-[#0a3ca2] text-white" : "text-[#0a3ca2]-800"
                }`}
                onClick={() => setAct(!act)}
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
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="even:bg-white odd:bg-gray-100">
                <td className="px-4 py-2">{user.firstName}</td>
                <td className="px-4 py-2">{user.lastName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-100 border border-1 px-2 cursor-pointer">
                    {user.role}
                  </button>
                </td>
                <td className="px-4 py-2 text-sm">{user.lastLogin}</td>
                <td className="px-4 py-2 cursor-pointer">
                  <div className="flex gap-5">
                    <button onClick={() => handleToggle(user.id)}>
                      {user.isActive ? (
                        <ToggleOn
                          style={{ color: colors.bgCol }}
                          fontSize="large"
                        />
                      ) : (
                        <ToggleOff fontSize="large" />
                      )}
                    </button>
                    <button>
                      <Edit style={{ color: colors.bgCol }} />
                    </button>
                    <button className="bg-[#0a3ca2] text-white px-2 rounded hover:shadow-lg">
                      Promote <ArrowUp style={{ color: "white" }} />{" "}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
