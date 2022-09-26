import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 fixed flex justify-between px-4 z-30 shadow-light-shadow items-center bg-primary text-text font-main">
      <div className="font-head text-2xl">
        <span className="text-primary-color">&lt;/&gt;</span> Alphacoder
      </div>
      <div className="w-44 flex justify-between">
        <button className="w-20 p-2 shadow-light-shadow bg-primary-color rounded-md">
          Login
        </button>
        <button className="w-20 p-2 shadow-light-shadow bg-primary-light rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
