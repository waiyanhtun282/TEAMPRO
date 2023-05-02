import React from "react";
import Foot from "../components/Footer/Foot";
import Customer from "../components/Home/Customer";
import HeroLeft from "../components/Home/HeroLeft";
import HeroRight from "../components/Home/HeroRight";
import Lang_Pj from "../components/Home/Lang_Pj";
import Path from "../components/Home/Path";

const Home = () => {
  return (
    <>
      <div className="flex  flex-col-reverse md:flex-row ">
        <HeroLeft />
        <HeroRight />
      </div>
      <div>
        <Lang_Pj/>
      </div>
      <Customer/>
      <Path/>
      <Foot/>
    </>
  );
};

export default Home;
