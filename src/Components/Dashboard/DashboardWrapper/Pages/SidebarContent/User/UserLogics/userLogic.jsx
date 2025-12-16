import axios from "axios";
const port = import.meta.env.VITE_API_PORT;

export const ActiveUser = (data) => {
  return data.reduce((count, item) => (item.active ? count + 1 : count), 0);
};

export const HandleToggle = (emailId, { update, setUpdate }) => {
  axios.put(`http://localhost:${port}/users/updateStatus?emailId=${emailId}`);
  setUpdate(!update);
  console.log("status ", emailId);
};

export const DeleteUser = (emailId, { update, setUpdate }) => {
  axios
    .delete(`http://localhost:${port}/users/deleteUser`, {
      params: { emailId: emailId },
    })
    .then(() => alert("User Deleted!"))
    .catch((err) => console.log("Error!", err));
  setUpdate(!update);
};
