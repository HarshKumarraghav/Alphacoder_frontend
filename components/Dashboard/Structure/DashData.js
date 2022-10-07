import React from "react";
import Image from "next/image";
import Img1 from "../../../Assets/StructureImg/img1.svg";
import Img2 from "../../../Assets/StructureImg/img2.svg";
import Img3 from "../../../Assets/StructureImg/img3.svg";
import Img4 from "../../../Assets/StructureImg/img4.svg";
import Img5 from "../../../Assets/StructureImg/img5.svg";
const DashData = () => {
  return (
    <>
      <div className="w-screen h-full bg-primary text-text">
        <div className="w-full h-[600px] md:h-[400px] flex flex-col md:flex-row gap-5 md:gap-3 md:px-4 items-center md:items-start pt-24">
          <div className="w-[90%] h-56 md:h-64 md:w-96 bg-primary-light shadow-light-shadow rounded-lg"></div>
          <div className="w-[90%] h-56 md:h-64 bg-primary-light shadow-light-shadow rounded-lg"></div>
        </div>
        <div className="flex w-full h-[250px] lg:justify-center">
          <div className="flex overflow-x-scroll md:w-full ">
            <div className="flex flex-nowrap md:w-full md:justify-between gap-4 px-5 scroll-smooth">
              <div className=" flex-col w-56 h-56 bg-primary-light shadow-light-shadow rounded-md flex justify-center items-center overflow-hidden">
                <Image src={Img1} width={200} />
                <h1 className="pb-2 font-head font-semibold">Blind75 Sheet</h1>
              </div>
              <div className=" flex-col w-56 h-56 bg-primary-light shadow-light-shadow rounded-md flex justify-center items-center overflow-hidden">
                <Image src={Img2} width={200} />
                <h1 className="pb-2 font-head font-semibold">Fraz's Sheet</h1>
              </div>
              <div className=" flex-col w-56 h-56 bg-primary-light shadow-light-shadow rounded-md flex justify-center items-center overflow-hidden">
                <Image src={Img3} width={200} />
                <h1 className="pb-2 font-head font-semibold">
                  Apna College's Sheet
                </h1>
              </div>
              <div className=" flex-col w-56 h-56 bg-primary-light shadow-light-shadow rounded-md flex justify-center items-center overflow-hidden">
                <Image src={Img4} width={200} />
                <h1 className="pb-2 font-head font-semibold">
                  Love Babar's Sheet
                </h1>
              </div>
              <div className=" flex-col w-56 h-56 bg-primary-light shadow-light-shadow rounded-md flex justify-center items-center overflow-hidden">
                <Image src={Img5} width={200} />
                <h1 className="pb-2 font-head font-semibold">
                  Striver's Sheet
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:px-4">
          <div className="flex w-full h-[700px] bg-primary-light">
            <div className="flex md:overflow-hidden overflow-x-scroll">
              <div className="flex flex-nowrap scroll-smooth">
                {/* <div className="w-56 h-56 bg-primary-light shadow-light-shadow rounded-md"></div>
                <div className="w-56 h-56 bg-primary-light shadow-light-shadow rounded-md"></div>
                <div className="w-56 h-56 bg-primary-light shadow-light-shadow rounded-md"></div>
                <div className="w-56 h-56 bg-primary-light shadow-light-shadow rounded-md"></div>
                <div className="w-56 h-56 bg-primary-light shadow-light-shadow rounded-md"></div>
                <div className="w-56 h-56 bg-primary-light shadow-light-shadow rounded-md"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashData;

{
  /* <div class="flex flex-col bg-white m-auto p-auto">
  <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
    <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
      <div class="inline-block px-3">
        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
      </div>
      <div class="inline-block px-3">
        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
      </div>
      <div class="inline-block px-3">
        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
      </div>
      <div class="inline-block px-3">
        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
      </div>
      <div class="inline-block px-3">
        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
      </div>
      <div class="inline-block px-3">
        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
      </div>
      <div class="inline-block px-3">
        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
      </div>
      <div class="inline-block px-3">
        <div class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
      </div>
    </div>
  </div>
</div>; */
}
