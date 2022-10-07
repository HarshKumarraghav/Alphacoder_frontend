// import React, { createContext, useContext, useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { GetServerSideProps } from "next";
// export const UserContext = createContext();
// // const FETCH_URI = "https://magnificent-gold-production.up.railway.app/";
// // export default async function GetServerSideProps() {
// //   const token = Cookies.get("access_token");

// //   return {
// //     props: {
// //       tokenId: token,
// //     },
// //   };
// // }

// export const UserProvider = ({ children, tokenId }) => {
//   const [token, setToken] = useState("");
//   const tokenId = Cookies.get("access_token");
//   if ((tokenId === "null", tokenId === undefined)) {
//     setToken(null);
//   } else {
//     setToken(tokenId);
//   }
//   console.log(token, "tokenId", tokenId);

//   return (
//     <UserContext.Provider value={[token, setToken]}>
//       {children}
//     </UserContext.Provider>
//   );
// };
// export function useUserAuth() {
//   return useContext(UserContext);
// }
