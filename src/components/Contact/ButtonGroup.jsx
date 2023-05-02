import React, { useState } from 'react'

const ButtonGroup = (props) => {

    const handleClick = () => {
        event.preventDefault();
    }

  return (
    <div className="md:flex md:flex-wrap shadow-sm" role="group">
      <div className=" grid grid-cols-3 md:block">
        {props?.projectType?.map((project, index) => (
          <button
            type="button"
            key={project?.id}
            className={`group-btn h-[80%] md:h-auto ${project?.id === 2}? 'active-btn' : ''`}
            onClick={() => handleClick()}
          >
            {project?.type}
          </button>
        ))}
      </div>
      <div className=" grid grid-cols-3 md:block">
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