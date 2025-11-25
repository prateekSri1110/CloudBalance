import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersData } from "../../../../../Data/users";
import { colors } from "../../../../styles";
import AddIcon from "@mui/icons-material/Add";

const User = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const updatedData = usersData?.map((item) => ({
      ...item,
      actions: ["edit", "delete"],
    }));
    setData(updatedData);
  }, []);

  console.log(data);

  return (
    <div className="w-full p-2">
      <h1 className="font-bold text-3xl mb-5">Users</h1>

      <div className="bg-white p-5 w-full overflow-auto shadow rounded-md">
        <button
          className="p-3 bg-[#0a3ca2] text-white font-bold mb-4 cursor-pointer"
          onClick={() => navigate("addUser")}
        >
          <AddIcon className="mb-1" color={colors.bgCol} /> Add New User
        </button>

        <table className="min-w-full border border-blue-300 text-left">
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
            {data.map((user, index) => (
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
                  {user.actions[0]} {user.actions[1]}
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
