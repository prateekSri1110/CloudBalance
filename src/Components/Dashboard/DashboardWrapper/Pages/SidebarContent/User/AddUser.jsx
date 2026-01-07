import { useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../../../../Utils/styles";
import Breadcrumb from "../../../../../Utils/breadcrumbs";
import { HandleAddUser, HandleUpdateUser } from "./UserLogics/userLogic";
import { useState } from "react";
import AccountOnboard from "../Onboarding/accountOnboard";
import { Input } from "../../../../../Utils/TagUtils";

const AddUser = () => {
  const navigate = useNavigate();

  const updateState = useLocation();
  const isUpdate = updateState.state;

  const [form, setForm] = useState(() => ({
    firstName: updateState.state?.firstName ?? "",
    lastName: updateState.state?.lastName ?? "",
    emailId: updateState.state?.emailId ?? "",
    role: updateState.state?.role ?? "",
    password: updateState.state?.password ?? ""
  }));

  const isDisabled =
    !form.firstName.trim() ||
    !form.lastName.trim() ||
    !form.emailId.trim() ||
    !form.role.trim() ||
    (!isUpdate && !form.password.trim());

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
                <label className="mb-4">First Name <span className="text-red-600">*</span></label>
                <Input type="text" placeholder={"Enter First Name"} value={form.firstName} onChange={(e) => setForm(prev => ({ ...prev, firstName: e.target.value }))} />
              </div>
              <div className="mb-5 ml-5">
                <label className="mb-4">Last Name <span className="text-red-600">*</span></label>
                <Input type="text" placeholder={"Enter Last Name"} value={form.lastName} onChange={(e) => setForm(prev => ({ ...prev, lastName: e.target.value }))} />
              </div>
            </div>
            <div className="flex">
              <div className="mb-5">
                <label className="mb-5">Email <span className="text-red-600">*</span></label>
                <Input type="email" placeholder={"Enter Email"} value={form.emailId} onChange={(e) => setForm(prev => ({ ...prev, emailId: e.target.value }))} readOnly={isUpdate ? true : false} />
              </div>
              <div className="mb-5 ml-5 w-80">
                <label className="mb-4">Select Data <span className="text-red-600">*</span></label>
                <br />
                <select
                  className="block border text-sm text-gray-500 px-5 py-3 w-100 rounded border border-blue-200"
                  value={form.role}
                  onChange={(e) => setForm(prev => ({ ...prev, role: e.target.value }))}
                >
                  <option value=""> Select Role</option>
                  <option value="ADMIN">ADMIN</option>
                  <option value="READONLY">READONLY</option>
                  <option value="CUSTOMER">CUSTOMER</option>
                </select>
              </div>
            </div>
            {!updateState.state ? (<div className="flex">
              <div className="mb-5 w-80">
                <label className="mb-5">Password <span className="text-red-600">*</span></label>
                <Input type="password" placeholder={"Enter Password"} value={form.password} onChange={(e) => setForm(prev => ({ ...prev, password: e.target.value }))} readOnly={isUpdate ? true : false} />
              </div>
            </div>) : (null)}
          </form>
        </div>

        <div className="w-1/2">
          {form.role == "CUSTOMER" ? <AccountOnboard /> : null}
        </div>
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
          className={`text-white font-bold ${isDisabled ? "bg-gray-500" : "bg-blue-700"} px-5 py-2 border rounded-sm mb-4 cursor-pointer`}
          onClick={() => {
            (isUpdate ?
              HandleUpdateUser(form).then(st => { if (st) navigate("/dashboard/users") })
              :
              HandleAddUser(form).then(st => { if (st) navigate("/dashboard/users") })
            )
          }}
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </div >
  );
};

export default AddUser;
