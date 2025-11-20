import { usersData } from "../../../../Data/users";
import { colors } from "../../../styles";

const User = () => {
  return (
    <div className="p-2">
      <h1 className="font-bold text-2xl mb-5">Users</h1>

      <div className="w-full overflow-auto rounded-md shadow">
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
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">{user.lastLogin}</td>
                <td className="px-4 py-2">{user.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
