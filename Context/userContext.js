import React, { createContext, useContext, useState, useEffect } from "react";
export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user_data = localStorage.getItem("user-data");
    user_data = JSON.parse(user_data);
    setUserData(user_data);
    console.log(user_data);
  }, []);
  return (
    <userContext.Provider value={[userData, setUserData]}>
      {children}
    </userContext.Provider>
  );
};
export function useUserStore() {
  return useContext(userContext);
}
