import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { requireAuthentication } from "../../HOC/requireAuthentication/requireAuthentication";
const Home = () => {
  const qwerty = Cookies.get("lastname");
  const [name, setName] = useState("");
  useEffect(() => {
    setName(qwerty);
  }, []);

  return <div>{name}</div>;
};

export default Home;
export const getServerSideProps = requireAuthentication((context) => {
  return {
    props: {},
  };
});

// export const getServerSideProps = requireAuthentication((context) => {
//   return {
//     props: {},
//   };
// });
