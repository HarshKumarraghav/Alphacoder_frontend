import React, { useState, useEffect } from "react";
import { requireAuthentication } from "../../HOC/requireAuthentication/requireAuthentication";
import Footer from "../../components/Footer/Footer";
import DashHeader from "../../components/Dashboard/Header/DashHeader";
import DashData from "../../components/Dashboard/Structure/DashData";
const index = ({ data }) => {
  const [allQuestion, setAllQuestion] = useState(data);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const user_data = localStorage.getItem("user-data");
    user_data = JSON.parse(user_data);
    setUserData(user_data);
    console.log(user_data);
  }, []);
  // console.log("data", JSON.parse(allQuestion));
  return (
    <>
      <DashHeader />
      <DashData />
      <Footer />
      {/* <h1>{allQuestion}</h1> */}
    </>
  );
};

export default index;

export const getServerSideProps = requireAuthentication(async (ctx) => {
  const FETCH_URI =
    "https://magnificent-gold-production.up.railway.app/sheets/frazsheet";
  const { req } = ctx;
  const token = req.cookies.access_token;
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Token: token,
    },
  };
  const response = await fetch(FETCH_URI, requestOptions);
  const data = await response.text();
  // console.log(data);
  return {
    props: {
      data,
    },
  };
});
