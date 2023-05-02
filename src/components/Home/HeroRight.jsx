import React from "react";
import Nav from "../Navbar/Nav";
import img from "../../assets/heroSection.svg";

const HeroRight = () => {
  return (
    <>
      <div className=" flex flex-col w-[100%] md:w-[50%] md:relative px-5 md:px-0">
        <Nav />
        <div className=" md:absolute md:block hidden md:bottom-20   md:left-[-130px] space-y-8 left-20 ">
          <img className="w-[80%] md:w-3/5" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroRight;
