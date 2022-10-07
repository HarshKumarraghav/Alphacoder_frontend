import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
export const UserContext = createContext();
const FETCH_URI = "https://magnificent-gold-production.up.railway.app/";
export const SheetProvider = ({ children }) => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      const response = await fetch(FETCH_URI + "api-1", requestOptions);

      if (!response.ok) {
        Cookies.set("access_token", null);
        setToken(null);
      }
      console.log(token);
      Cookies.set("access_token", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {children}
    </UserContext.Provider>
  );
};
export function useUserAuth() {
  return useContext(UserContext);
}
