import AddIcon from "@mui/icons-material/Add";
import { colors } from "../../../../styles";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 w-full bg-white-400">
      <h1 className="text-3xl font-bold mb-4">Add New User</h1>
      <hr />
      <div className="p-5 bg-white mt-5">
        <form className="form">
          <div className="flex">
            <div className="mb-5">
              <label className="mb-4">First Name</label>
              <input
                type="text"
                className="block border text-lg  px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter First Name"
              />
            </div>
            <div className="mb-5 ml-5">
              <label className="mb-4">Last Name</label>
              <input
                type="text"
                className="block border text-lg px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-5">
              <label className="mb-5">Email</label>
              <input
                type="email"
                className="block border text-lg px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-5 ml-5">
              <label className="mb-4">Select Data</label>
              <br />
              <select
                className="block border text-lg text-gray-500 px-5 py-3 w-full rounded border border-blue-200"
                style={{ width: "300px" }}
              >
                <option value=""> Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Read-Only">Read-Only</option>
                <option value="Customer">Customer</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div
        className="gap-3 w-full flex justify-end  p-5"
        style={{ backgroundColor: colors.main }}
      >
        <button
          className="text-[#0a3ca2] font-bold px-5 py-2 border rounded-lg mb-4 cursor-pointer"
          onClick={() => navigate("/dashboard/users")}
        >
          Cancel
        </button>
        <button
          className="text-white font-bold bg-gray-500 px-5 py-2 border rounded-lg mb-4 cursor-pointer"
          onClick={() => {
            alert("User added!");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
