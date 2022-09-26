import React from "react";
import HeroImg from "../../Assets/landing/hero.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-full flex justify-center items-center font-bold px-10 flex-col-reverse lg:flex-row gap-6">
      <div className="w-full lg:w-1/2 lg:h-full flex items-center flex-col justify-center gap-y-10 leading-10">
        <h1 className="lg:text-6xl md:text-6xl text-3xl text-center">
          Solve all your&nbsp;
          <span className="text-primary-color hover:underline hover:transition-all">
            DSA sheet
          </span>
          &nbsp;problems at one place.
        </h1>
        <div className="flex justify-center">
          <button className="w-40 text-center p-2 shadow-light-shadow bg-primary-color rounded-md">
            let's Begin
          </button>
        </div>
      </div>
      <div className="w-full h-1/2 lg:w-1/2 lg:h:full hover:-translate-y-3 hover:transition-all flex justify-center items-center">
        <Image src={HeroImg} objectFit="fill" width={600} height={600} />
      </div>
    </div>
  );
};

export default Hero;
