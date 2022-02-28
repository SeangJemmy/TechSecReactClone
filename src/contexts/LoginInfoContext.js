import React, { createContext, useState, useContext } from "react";

const LoginContext = createContext({
  userPass: [],
  setUserPass: () => {},
});

export function GetUserInfo() {
  return useContext(LoginContext);
}

export const LoginContextProvider = ({ children }) => {
  const [userPass, setUserPass] = useState([
    {
      user: "admin",
      email: "admin@techsec.cf",
      pass: "admin123",
    },
  ]);

  return (
    <LoginContext.Provider value={{ userPass, setUserPass }}>
      {children}
    </LoginContext.Provider>
  );
};
