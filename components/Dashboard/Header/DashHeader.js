import React from "react";
import Image from "next/image";
import Avatar from "../../../Assets/Avatars/face1.svg";
const DashHeader = () => {
  return (
    <div className="w-full h-16 fixed flex justify-between px-4 z-30 shadow-light-shadow items-center bg-primary text-text font-main">
      <div className="font-head text-xl md:text-2xl lg:text-3xl cursor-pointer">
        <span className="text-primary-color">&lt;/&gt;</span> Alphacoder
      </div>
      <div className="w-10 h-10 md:w-12 md:h-12 text-[12px] md:text-sm ">
        <div className=" w-full h-full flex justify-center items-center bg-primary-color rounded-full overflow-hidden">
          <Image src={Avatar} />
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
