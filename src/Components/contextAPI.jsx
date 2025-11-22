import { createContext, useState } from "react";

export const CloudBalanceContext = createContext();

export const CloudBalanceContextProvider = ({ children }) => {
  const [slide, setSlide] = useState(false);

  return (
    <CloudBalanceContext.Provider value={{ slide, setSlide }}>
      {children}
    </CloudBalanceContext.Provider>
  );
};
