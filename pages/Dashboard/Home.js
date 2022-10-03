import React from "react";
import Cookies from "js-cookie";
const Home = () => {
  const qwerty = Cookies.get("lastname");
  return <div>{qwerty}</div>;
};

export default Home;
