import React from "react";
import Image from "next/image";
import error404 from "../Assets/404/404.svg";
const errorpage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-primary">
      <Image src={error404} />
    </div>
  );
};

export default errorpage;
