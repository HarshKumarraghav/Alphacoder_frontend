import React from "react";
import SignupImg from "../Assets/Auth/signup.svg";
import Image from "next/image";
const Signup = () => {
  return (
    <div className="h-screen w-screen bg-primary text-text flex lg:flex-row flex-col font-main">
      <div className="lg:w-1/2 lg:h-full h-1/2 flex flex-col lg:justify-center items-center py-3 gap-3">
        <h1 className="font-head text-4xl md:text-6xl lg:text-6xl">
          <span className="text-primary-color">&lt;/&gt;</span>Alphacoder
        </h1>
        <Image src={SignupImg} />
      </div>
      <div className="lg:w-1/2 lg:h-full lg:justify-evenly lg:bg-primary-light w-full h-1/2 flex flex-col items-center justify-between py-5">
        <div className="w-full flex items-center flex-col">
          <h1 className="text-2xl w-3/4">
            Start your Problem Solving journey with us.
          </h1>
        </div>
        <form action="" className="flex flex-col items-center w-full gap-3">
          <div className="flex w-3/4 gap-x-3">
            <input
              type="text"
              className="border-none w-3/4 h-12 rounded-md placeholder:text-primary-color  placeholder:font-bold placeholder:p-2  focus:outline-primary-color text-primary-color p-2"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border-none w-3/4 h-12 rounded-md placeholder:text-primary-color placeholder:font-bold placeholder:p-2 focus:outline-primary-color text-primary-color p-2"
              placeholder="Last Name"
            />
          </div>

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
            Register
          </button>
        </form>
        <div className="">
          Have an account?&nbsp;
          <span className="text-primary-color font-bold">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
