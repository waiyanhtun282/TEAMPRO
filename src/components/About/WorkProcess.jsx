import React from "react";
import {workProcess} from '../../data/workProcesses';

const WorkProcess = () => {
  return (
    <div className="flex flex-col md:p-20 p-14 flex-wrap justify-center items-center">
      <h2 className="font-bold text-[#A30CFF] md:text-5xl text-3xl break-words">
        Our Work Process
      </h2>
      <br />
      <h2 className="font-bold md:text-5xl text-3xl mb-10 break-words max-w-xs text-center md:max-w-none">
        Design to Developing a Product
      </h2>

      <div className="md:flex md:flex-wrap grid grid-cols-2 md:gap-2 gap-5">
        {workProcess?.map((process) => (
          <div
            key={process?.id}
            className="block max-w-sm md:p-6 p-5 bg-[#B5D1FF] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="md:mb-2 mb-1 md:text-4xl text-2xl font-bold tracking-tight text-[#A30CFF] dark:text-white">
              0{process?.id}
            </h5>
            <p className="font-semibold md:text-2xl text-[19px] text-gray-700 dark:text-gray-400">
              {process?.process}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
