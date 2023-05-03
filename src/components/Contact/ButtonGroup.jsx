import React, { useState } from 'react'

const ButtonGroup = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
    }

  return (
    <div className="md:flex md:flex-wrap shadow-sm " role="group">
      <div className=" grid grid-cols-2 gap-2  md:block my-5 md:my-0  ">
        {props?.projectType?.map((project, index) => (
          <button
            type="button"
            key={project?.id}
            className={`group-btn  ${
              project?.id === 2
            }? 'active-btn' : ''`}
            onClick={() => handleClick()}
          >
            {project?.type}
          </button>
        ))}
      </div>
      <div className=" grid grid-cols-2 gap-5 md:gap-0 md:block">
        {props?.serviceType?.map((service, index) => (
          <button
            type="button"
            key={service?.id}
            className="group-btn active-btn "
            onClick={() => handleClick()}
          >
            {service?.type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonGroup