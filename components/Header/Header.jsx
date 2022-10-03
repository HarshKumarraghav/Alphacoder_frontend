import React from "react";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <div className="w-full h-16 fixed flex justify-between px-4 z-30 shadow-light-shadow items-center bg-primary text-text font-main">
      <div
        className="font-head text-xl md:text-2xl lg:text-3xl cursor-pointer"
        onClick={() => router.push("/")}
      >
        <span className="text-primary-color">&lt;/&gt;</span> Alphacoder
      </div>
      <div className="w-36 md:w-44 lg:w-52 flex justify-between text-[12px] md:text-sm">
        <button
          className="w-16 md:w-20 lg:w-24 p-2 shadow-light-shadow bg-primary-color rounded-md"
          onClick={() => router.push("/Login")}
        >
          Login
        </button>
        <button
          className="w-16 md:w-20 lg:w-24 p-2 shadow-light-shadow bg-primary-light rounded-md"
          onClick={() => router.push("/Signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
