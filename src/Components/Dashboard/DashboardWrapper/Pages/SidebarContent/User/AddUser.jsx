import { colors } from "../../../../styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [role, setRole] = useState("");

  const user = {
    firstName: firstName,
    lastName: lastName,
    emailId: emailId,
    role: role,
  };

  const HandleAddUser = async (user) => {
    try {
      await axios
        .post("http://localhost:8080/users/add", {
          firstName: user.firstName,
          lastName: user.lastName,
          emailId: user.emailId,
          role: user.role,
        })
        .then(() => {
          alert("User Added!");
          navigate("/dashboard/users");
        })
        .catch((err) => alert(err));
    } catch (e) {
      e.printStackTrace();
      console.log("Error :", e);
    }
  };

  return (
    <div className="p-5 w-2/3 bg-white-400">
      <h1 className="text-2xl font-bold mb-4">Add New User</h1>
      <hr />
      <div className="p-5 text-sm bg-white mt-5">
        <form className="form">
          <div className="flex">
            <div className="mb-5">
              <label className="mb-4">First Name</label>
              <input
                type="text"
                className="block border text-sm  px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-5 ml-5">
              <label className="mb-4">Last Name</label>
              <input
                type="text"
                className="block border text-sm px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mb-5">
              <label className="mb-5">Email</label>
              <input
                type="email"
                className="block border text-sm px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter Email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div className="mb-5 ml-5">
              <label className="mb-4">Select Data</label>
              <br />
              <select
                className="block border text-sm text-gray-500 px-5 py-3 w-full rounded border border-blue-200"
                style={{ width: "245px" }}
                value={role}
                onChange={(e) => setRole(e.target.value)}
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
          className="text-[#0a3ca2] font-bold px-5 py-2 border rounded-sm mb-4 cursor-pointer"
          onClick={() => navigate("/dashboard/users")}
        >
          Cancel
        </button>
        <button
          className="text-white font-bold bg-gray-500 px-5 py-2 border rounded-sm mb-4 cursor-pointer"
          onClick={() => HandleAddUser(user)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
