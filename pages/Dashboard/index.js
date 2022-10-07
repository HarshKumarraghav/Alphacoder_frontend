import React, { useState } from "react";
import { requireAuthentication } from "../../HOC/requireAuthentication/requireAuthentication";
import DashHeader from "../../components/Dashboard/Header/DashHeader";

const index = ({ data }) => {
  const [allQuestion, setAllQuestion] = useState(data);
  console.log("data", JSON.parse(allQuestion));
  return (
    <>
      <DashHeader />
      {/* <h1>{allQuestion}</h1> */}
    </>
  );
};

export default index;

export const getServerSideProps = requireAuthentication(async (ctx) => {
  const FETCH_URI = "https://magnificent-gold-production.up.railway.app/sheet";
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
  console.log(data);
  return {
    props: {
      data,
    },
  };
});
