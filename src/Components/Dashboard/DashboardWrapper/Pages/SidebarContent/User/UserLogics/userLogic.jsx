import axios from "axios";

export const ActiveUser = (data) => {
  return data.reduce((count, item) => (item.active ? count + 1 : count), 0);
};

export const handleToggle = (emailId, { update, setUpdate }) => {
  axios.put(`http://localhost:8080/users/updateStatus?emailId=${emailId}`);
  setUpdate(!update);
  console.log("status ", emailId);
};

export const deleteUser = (emailId, { update, setUpdate }) => {
  axios
    .delete("http://localhost:8080/users/deleteUser", {
      params: { emailId: emailId },
    })
    .then(() => alert("User Deleted!"))
    .catch((err) => console.log("Error!", err));
  setUpdate(!update);
};
