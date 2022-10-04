import React from "react";
import { requireAuthentication } from "../../HOC/requireAuthentication/requireAuthentication";
const index = () => {
  return <div>index</div>;
};

export default index;

export const getServerSideProps = requireAuthentication((context) => {
  return {
    props: {},
  };
});
