import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import './Nav.css';

const Nav = () => {
  const [nav,setNav] =useState(true)
  return (
    <div className=" flex justify-between items-center px-5 md:px-0 shadow-lg">
      <h1 className=" md:hidden flex">Logo</h1>
      <div
        className={`${
          nav ? "close-button" : "responsive-nav"
        } md:flex  md:gap-20  md:font-bold md:w-[100%] text-[20px] md:text-2xl md:shadow-lg md:h-[60px] md:justify-center md:items-center absolute right-2 top-10 md:static md:right-0 md:left-0`}
      >
        <NavLink to={"/"}>
          <p className="md:uppercase ">Home</p>
        </NavLink>
        <NavLink to={"/about"}>
          <p className="md:uppercase ">About</p>
        </NavLink>
        <NavLink to={"/contact"}>
          <p className=" md:uppercase">Contact Us</p>
        </NavLink>
      </div>
      <div className=" flex md:hidden">
        <Hamburger
          direction="left"
          size="25"
          color="#000"
          duration={0.5}
          onToggle={(toggle) => {
            if (toggle) {
              setNav(false);
            } else {
              setNav(true)
            }
          }}
        />
      </div>
    </div>
  );
};

export default Nav;
