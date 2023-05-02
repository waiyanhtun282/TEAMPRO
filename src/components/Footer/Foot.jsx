import React from "react";

const Foot = () => {
  return (
    <div>
      <div className=" bg-gray-700 md:py-14 py-7 px-28 flex md:flex-row flex-col items-center justify-between">
        <div className="text-white flex flex-col md:gap-16 gap-8 md:w-[50%] max-w-xs md:max-w-none">
          <h2
            className="text-center md:text-justify md:text-[40px] text-[26px]
          "
          >
            Let's Work Together
          </h2>
          <p className=" text-center md:text-justify text-[22px]  md:text-[24px] w-[100%]">
            We'll do our best for our client .Trust us , we must not make our
            client regret about project. Our direction is to get trust and keep
            working long tern with our client.{" "}
          </p>
          <div className="flex md:gap-16 my-5 md:my-0 flex-wrap gap-8">
            <div className=" ">
              <p className=" text-[20px] md:text-2xl">Call now:</p>
              <button className=" text-[20px] md:text-2xl">
                +95 425212523
              </button>
            </div>
            <div className="">
              <p className=" text-[20px] md:text-2xl">Email now:</p>
              <button className=" text-[20px] md:text-2xl">
                hashtag.team@gmail.com
              </button>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col md:gap-16 gap-5 md:w-[40%] mt-3 md:mt-3  ">
          <p className="text-[22px] md:text-2xl text-center md:text-justify">
            We'll contact you later.
          </p>
          <div className=" flex md:block">
            <input
              className=" text-gray-700 outline-none rounded-l-lg text-lg md:py-2 py-1"
              type="email"
            />
            <button className=" rounded-r-lg text-white bg-[#A30CFF] md:text-lg text-[18px] md:py-2 md:px-4 py-1 px-2">
              SEND
            </button>
          </div>
          <p className=" text-[18px] md:text-2xl">Follow Me:</p>
        </div>
      </div>
      <div className=" text-white flex justify-between md:px-28 px-5 bg-[#A30CFF]">
        <button className=" text-[20px] md:text-2xl">LOGO</button>

        
          <div className=" main-bg-color md:p-4 p-2 font-color rounded-md ">
            <p className="md:font-bold font-medium text-center text-[20px] md:text-2xl max-w-xs md:max-w-none">
              Copyright & copy {new Date().getFullYear()}@codeByNoone
            </p>
          </div>
        
      </div>
    </div>
  );
};

export default Foot;
