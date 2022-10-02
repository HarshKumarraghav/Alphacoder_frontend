import React from "react";
import LoginImg from "../Assets/Auth/login.svg";
import Image from "next/image";
const Login = () => {
  return (
    <div className="h-screen w-screen bg-primary text-text flex lg:flex-row-reverse flex-col font-main">
      <div className="lg:w-1/2 lg:h-full h-1/2 flex flex-col lg:justify-center items-center py-3 gap-3">
        <h1 className="font-head text-4xl md:text-6xl lg:text-6xl">
          <span className="text-primary-color">&lt;/&gt;</span>Alphacoder
        </h1>
        <Image src={LoginImg} />
      </div>
      <div className="lg:w-1/2 lg:h-full lg:justify-evenly lg:bg-primary-light w-full h-1/2 flex flex-col items-center justify-between py-5">
        <div className="w-full flex items-center flex-col">
          <h1 className="text-2xl w-3/4">Let's sign you in.</h1>
          <h2 className="text-xl w-3/4">Welcome back. You've been missed!</h2>
        </div>
        <form action="" className="flex flex-col items-center w-full gap-3">
          <input
            type="text"
            className="border-none w-3/4 h-12 rounded-md placeholder:text-primary-color  placeholder:font-bold placeholder:p-2  focus:outline-primary-color text-primary-color p-2"
            placeholder="Email"
          />
          <input
            type="password"
            className="border-none w-3/4 h-12 rounded-md placeholder:text-primary-color placeholder:font-bold placeholder:p-2 focus:outline-primary-color text-primary-color p-2"
            placeholder="Password"
          />
          <button className="w-3/4 text-center h-12 rounded-md bg-primary-color">
            Signup
          </button>
        </form>
        <div className="">
          Don't have an account?&nbsp;
          <span className="text-primary-color font-bold">Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
