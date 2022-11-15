import { createContext, useState } from "react";

export const ToggleContext = createContext("");

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(0);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
