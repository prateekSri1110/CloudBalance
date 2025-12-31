import { toast } from "react-toastify";
import api from "../../../../../../Utils/axios";

export const HandleAddUser = async (form) => {
  console.log(form);

  try {
    await api.post(``, {
      firstName: form.firstName,
      lastName: form.lastName,
      role: form.role,
      emailId: form.emailId,
      password: form.password,
    })
      .then(() => {
        toast("User Added!");
      })
      .catch((err) => alert(err));
  } catch (e) {
    e.printStackTrace();
    console.log("Error :", e);
  }
  return true;
};

export const HandleUpdateUser = async (form) => {
  try {
    await api.put(``, form)
      .then(() => {
        toast("User Updated!");
      })
      .catch((err) => alert(err));
  } catch (e) {
    e.printStackTrace();
    console.log("Error :", e);
  }
  return true;
};

export const ActiveUser = (data) => {
  return data.reduce((count, item) => (item.active ? count + 1 : count), 0);
};

export const HandleToggle = (emailId) => {
  api.put(`/status`, null, { params: { emailId: emailId } });
};

export const DeleteUser = (emailId) => {
  api.delete(``, {
    params: { emailId: emailId },
  })
    .then(() => toast("User Deleted!"))
    .catch((err) => console.log("Error!", err));
};
