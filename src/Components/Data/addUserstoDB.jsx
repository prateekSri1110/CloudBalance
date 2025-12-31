import { useEffect, useState } from "react";
import { usersData } from "./users";
import api from "../Utils/axios";

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
          const res = await api.post(``, {
            firstName: user.firstName,
            lastName: user.lastName,
            emailId: user.email,
            role: user.role,
            password: user.password,
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
