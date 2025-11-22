import { usersData } from "../../../../Data/users";
import { colors } from "../../../styles";
import AddIcon from "@mui/icons-material/Add";

const User = () => {
  return (
    <div className="w-full p-2">
      <h1 className="font-bold text-2xl mb-5">Users</h1>

      <div className="bg-white p-5 w-full overflow-auto shadow rounded-md">
        <button className="p-3 bg-teal-800 text-white font-bold mb-4 cursor-pointer">
          <AddIcon className="mb-1" /> Add New User
        </button>

        <table className="min-w-full border border-blue-300 text-left">
          <thead style={{ backgroundColor: colors.active }}>
            <tr>
              <th className="px-4 py-2">Sr.</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email ID</th>
              <th className="px-4 py-2">Roles</th>
              <th className="px-4 py-2">Last Login</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {usersData.map((user, index) => (
              <tr key={user.id} className="odd:bg-white even:bg-gray-200">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.firstName}</td>
                <td className="px-4 py-2">{user.lastName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-100 rounded-md p-1 cursor-pointer">
                    {user.role}
                  </button>
                </td>
                <td className="px-4 py-2">{user.lastLogin}</td>
                <td className="px-4 py-2 cursor-pointer">{user.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
