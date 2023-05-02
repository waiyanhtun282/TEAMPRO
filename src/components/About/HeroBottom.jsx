66;
import React from "react";

const HeroBottom = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center md:items-start bg-[#D8D8D8] py-5 md:py-0 px-5 md:px-0 border-2">
      <div className="left flex md:w-[50%] flex-col  md:my-auto">
        <h2 className="mx-auto font-bold md:text-5xl text-3xl">Get To Know</h2>
        <br />
        <h2 className="mx-auto font-bold text-[#A30CFF] md:text-5xl text-3xl">
          About My Team
        </h2>
      </div>
      <div className="md:right flex md:w-[50%] md:my-auto justify-center items-center w-[90%]">
        <p className="md:mr-[100px] md:py-16 py-8 text-[20px] text-justify md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          suscipit velit ipsum magnam aspernatur sed minima repellat aut laborum
          laboriosam iusto, impedit reiciendis ratione iste unde doloribus
          quibusdam quidem neque commodi cumque accusamus ea tempora? Nihil eum
          architecto vel ex!
        </p>
      </div>
    </div>
  );
};

export default HeroBottom;
