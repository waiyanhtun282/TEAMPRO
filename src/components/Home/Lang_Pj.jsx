import React from "react"
import { langData } from "../../data/languages";
import Project from "./Project";

const Lang_Pj = () => {
  return (
    <>
      <div className=" flex flex-col items-center md:mt-20 mt-8 md:gap-10 gap-6 px-5 md:px-0">
        <div>
          <h2 className=" md:text-2xl text-[20px] max-w-[60%] text-center md:max-w-none flex mx-auto md:inline-block">
            We're Using this language for your Bussiness
          </h2>
          <hr className=" border-b-2 border-[#A30CFF] w-48 mt-2 flex mx-auto md:mx-0  md:block" />
        </div>
        <div className="md:flex md:gap-16 gap-14 items-center grid grid-cols-3">
          {langData.map((img) => {
            return (
              <div key={img.id}>
                <img className=" w-[80px] md:w-28" src={img.img} alt="" />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center">
          <h2 className=" md:text-3xl text-2xl font-bold">
            OUR<span className="text-[#ab3af7] md:text-[#A30CFF]"> PROJECT</span>
          </h2>
            <Project/>
        </div>
      </div>
    </>
  );
};

export default Lang_Pj;
