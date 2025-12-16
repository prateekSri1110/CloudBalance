import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { colors } from "../../../../../Utils/styles";
import { toast } from "react-toastify";

const AddUser = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [updateState, setUpdateState] = useState({});
  const port = import.meta.env.VITE_API_PORT;

  const updateUser = useLocation();
  const memoizedState = useMemo(() => {
    return updateUser?.state ? updateUser.state : null;
  }, [updateUser]);

  useEffect(() => {
    setUpdateState(memoizedState);
  }, [memoizedState]);

  useEffect(() => {
    if (updateState != null) {
      setFirstName(updateState.firstName);
      setLastName(updateState.lastName);
      setEmailId(updateState.emailId);
      setRole(updateState.role);
    }
  }, [updateState]);

  // console.log(updateState);
  // console.log(updateUser.state ? updateUser.state.emailId : null);

  const HandleAddUser = async () => {
    try {
      await axios
        .post(`http://localhost:${port}/users/add`, {
          firstName,
          lastName,
          emailId,
          role,
          password,
        })
        .then(() => {
          toast("User Added!");
          navigate("/dashboard/users");
        })
        .catch((err) => alert(err));
    } catch (e) {
      e.printStackTrace();
      console.log("Error :", e);
    }
  };

  const HandleUpdateUser = async () => {
    try {
      await axios
        .put("http://localhost:8080/users/updateUser", {
          firstName,
          lastName,
          emailId,
          role,
        })
        .then(() => {
          toast("User Updated!");
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
      <h1 className="text-2xl font-bold mb-4">
        {updateState ? "Update" : "Add"} New User
      </h1>
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
                readOnly={updateState ? true : false}
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
                <option value="Admin">ADMIN</option>
                <option value="Read-Only">READONLY</option>
                <option value="Customer">CUSTOMER</option>
              </select>
            </div>
          </div>
          <div className="flex">
            <div className="mb-5">
              <label className="mb-5">Password</label>
              <input
                type="password"
                className="block border text-sm px-5 py-3 w-full rounded border border-blue-200"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
          onClick={() => (updateState ? HandleUpdateUser() : HandleAddUser())}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
