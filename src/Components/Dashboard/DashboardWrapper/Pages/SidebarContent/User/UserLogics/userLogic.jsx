import axios from "axios";

export const ActiveUser = (data) => {
  return data.reduce((count, item) => (item.active ? count + 1 : count), 0);
};

export const HandleToggle = (emailId, { update, setUpdate }) => {
  axios.put(`http://localhost:8080/users/updateStatus?emailId=${emailId}`);
  setUpdate(!update);
  console.log("status ", emailId);
};

export const DeleteUser = (emailId, { update, setUpdate }) => {
  axios
    .delete("http://localhost:8080/users/deleteUser", {
      params: { emailId: emailId },
    })
    .then(() => alert("User Deleted!"))
    .catch((err) => console.log("Error!", err));
  setUpdate(!update);
};

// user form logic
// export const HandleAddUser = async ({ user }) => {
//   try {
//     await axios
//       .post("http://localhost:8080/users/add", {
//         firstName: user.firstName,
//         lastName: user.lastName,
//         emailId: user.emailId,
//         role: user.role,
//       })
//       .then(() => {
//         alert("User Added!");
//       })
//       .catch((err) => alert(err));
//   } catch (e) {
//     e.printStackTrace();
//     console.log("Error :", e);
//   }
// };
