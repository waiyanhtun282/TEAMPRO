import React from "react";
import upwork from "../../assets/upwork-logo.png";

const HeroLeft = () => {
  return (
    <>
      <div className=" w-[100%] md:w-[50%] flex flex-col items-center md:py-52 py-28 bg-[#A30CFF] shadow-lg rounded-b-lg px-5 md:px-0">
        <div className=" flex flex-col gap-4 ">
          <p className=" text-white md:text-4xl text-3xl font-bold">UPDATE</p>
          <p className="text-3xl md:text-4xl font-bold">
            {" "}
            <span className="text-white">YOUR</span>{" "}
            <span className=" text-[#8ef5dded] md:text-black">BUSINESS</span>
          </p>
          <p className="text-white text-lg ">
            We've been helping customer globally.
          </p>
          <div className="flex gap-5">
            <button className=" bg-white rounded-md md:px-6 md:py-1 px-4 py-1 md:text-2xl text-[20px]">
              GET STARTED
            </button>
            <button className=" bg-white rounded-md px-6 py-1 w-24">
              <img src={upwork} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
