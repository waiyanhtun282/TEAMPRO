import React from "react";
import { useState } from "react";
import { partOfWebService } from "../../data/services"

const Path = () => {
  const [typeOfService,setTypeOfService] = useState(partOfWebService)

  const filter  = (type) =>{
      setTypeOfService(partOfWebService.filter(service=> service.type === type))
      
  }
  return (
    <div className="flex md:flex-row flex-col-reverse md:px-16 md:py-16 py-10  px-5 gap-8 md:gap-0">
      <div className="md:w-4/5 w-auto   flex flex-wrap  md:gap-10 gap-6">
        {typeOfService.map((cate) => {
          return (
            <div
              key={cate.id}
              className=" select-none md:block  mx-auto md:mx-0 md:max-w-sm max-w-[85%]  md:p-6 p-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
            >
              <h5 className="mb-2 md:text-2xl text-[22px] font-bold tracking-tight text-gray-900 dark:text-white">
                {cate.service}
              </h5>
              <p className="font-normal md:text-2xl text-[20px] md:text-baseline text-gray-700 dark:text-gray-400">
                {cate.categeory}
              </p>
            </div>
          );
        })}
      </div>
      <div className=" md:w-1/5 w-auto flex flex-row md:flex-col mx-auto gap-10">
        <button
          onClick={() => filter("ui/ux")}
          className=" bg-[#A30CFF] text-white rounded-[100%] md:w-32 md:h-32 w-20 h-20 flex items-center justify-center"
        >
          <h2>UI/UX</h2>
        </button>
        <button
          onClick={() => filter("frontend")}
          className=" bg-[#A30CFF] text-white rounded-[100%] md:w-32 md:h-32 w-20 h-20 flex items-center justify-center"
        >
          <h2>F</h2>
        </button>
        <button
          onClick={() => filter("backend")}
          className=" bg-[#A30CFF] text-white rounded-[100%] md:w-32 md:h-32 w-20 h-20 flex items-center justify-center"
        >
          <h2>B</h2>
        </button>
      </div>
    </div>
  );
};

export default Path;
