import { toast } from "react-toastify";
import api from "../../../../../../Utils/axios";

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
