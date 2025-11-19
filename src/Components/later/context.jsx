import { createContext } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const obj1 = {
    name: "prateek",
    age: 24,
    company: "company",
  };
  
  return (
    <>
      <MyContext.Provider value={{ obj1 }}>{children}</MyContext.Provider>
    </>
  );
};
