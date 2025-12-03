import { useEffect, useState } from "react";
import { usersData } from "./users";
import axios from "axios";

export const AddUserstoDB = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updatedData = usersData?.map((item) => ({
      ...item,
      actions: ["edit", "delete"],
      isActive: false,
    }));
    setData(updatedData);
  }, []);

  useEffect(() => {
    console.log("api calling is running!");

    const addUsers = async () => {
      for (const user of data) {
        try {
          const res = await axios.post("http://localhost:8080/users/add", {
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.email,
            role: user.role,
            lastLogin: user.lastLogin,
            active: false,
          });
          console.log("User added:", res.data);
        } catch (err) {
          console.error("Error adding user:", err);
        }
      }
    };

    addUsers();
  }, []);

  console.log(data);

  return (
    <>
      <h1>Add User data to DB using API</h1>
    </>
  );
};
