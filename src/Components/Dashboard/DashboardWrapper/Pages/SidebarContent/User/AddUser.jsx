import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../../../../Utils/styles";
import Breadcrumb from "../../../../../Utils/breadcrumbs";
import { HandleAddUser, HandleUpdateUser } from "./UserLogics/userLogic";
import { useEffect, useState } from "react";
import { Input } from "../../../../../Utils/TagUtils";
import AccountOnboard from "./UserLogics/accountOnboard";
import api from "../../../../../Utils/axios";

const AddUser = () => {
  const navigate = useNavigate();

  const updateState = useLocation();
  const isUpdate = updateState.state;

  const [selectedAccounts, setSelectedAccounts] = useState([]);

  const [form, setForm] = useState(() => ({
    firstName: "",
    lastName: "",
    emailId: "",
    role: "",
    password: "",
    accountIds: []
  }));

  useEffect(() => {
    if (isUpdate) {
      setForm({
        firstName: isUpdate.firstName ?? "",
        lastName: isUpdate.lastName ?? "",
        emailId: isUpdate.emailId ?? "",
        role: isUpdate.role ?? "",
        password: "",
        accountIds: isUpdate.accountIds ?? []
      });
    }
  }, [isUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const isDisabled =
    !form.firstName.trim() ||
    !form.lastName.trim() ||
    !form.emailId.trim() ||
    !form.role.trim() ||
    (!isUpdate && !form.password.trim());

  const [allAccounts, setAllAccounts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('/accounts');
      setAllAccounts(res?.data);
    })();
  }, []);

  return (
    <div className="p-3 bg-white-400">
      <Breadcrumb />
      <h1 className="text-2xl font-bold mb-4">
        {isUpdate ? "Update" : "Add"} New User
      </h1>
      <hr className="text-gray-300" />

      <div className="p-5 text-sm bg-white mt-5 w-full flex">
        <div className="form w-1/2">
          <form className="form">
            <div className="flex">
              <div className="mb-5">
                <label className="mb-4">
                  First Name <span className="text-red-600">*</span>
                </label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 ml-5">
                <label className="mb-4">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex">
              <div className="mb-5">
                <label className="mb-5">
                  Email <span className="text-red-600">*</span>
                </label>
                <Input
                  type="email"
                  name="emailId"
                  placeholder="Enter Email"
                  value={form.emailId}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-5 ml-5 w-80">
                <label className="mb-4">
                  Select Data <span className="text-red-600">*</span>
                </label>
                <br />
                <select
                  name="role"
                  className="block border text-sm text-gray-500 px-5 py-3 w-100 rounded border border-blue-200"
                  value={form.role}
                  onChange={handleChange}
                >
                  <option value=""> Select Role</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="READONLY">READONLY</option>
                  <option value="CUSTOMER">CUSTOMER</option>
                </select>
              </div>
            </div>

            {!isUpdate && (
              <div className="flex">
                <div className="mb-5 w-80">
                  <label className="mb-5">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={handleChange}
                    readOnly={isUpdate}
                  />
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="w-1/2">
          {!isDisabled && form.role === "CUSTOMER" ? (
            <AccountOnboard
              allAccounts={allAccounts}
              selectedAccounts={selectedAccounts}
              setSelectedAccounts={setSelectedAccounts}
            />
          ) : null}
        </div>
      </div>

      <div
        className="gap-3 w-full flex justify-end p-5"
        style={{ backgroundColor: colors.main }}
      >
        <button
          className="text-[#0a3ca2] font-bold px-5 py-2 border rounded-sm mb-4 cursor-pointer"
          onClick={() => navigate("/dashboard/users")}
        >
          Cancel
        </button>

        <button
          className={`text-white font-bold ${isDisabled ? "bg-gray-500" : "bg-blue-700"
            } px-5 py-2 border rounded-sm mb-4 cursor-pointer`}
          onClick={() => {
            const payload = {
              ...form,
              accountIds: form.role === "CUSTOMER" ? selectedAccounts : []
            };

            (isUpdate
              ? HandleUpdateUser(payload)
              : HandleAddUser(payload)
            ).then(st => {
              if (st) navigate("/dashboard/users");
            });
          }}
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
