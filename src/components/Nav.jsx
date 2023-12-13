import React, { useState } from "react";

//import Link from react router
import { Link } from "react-router-dom";

//import logo
import logoIcon from "../assets/img/logo.png";

const Nav = () => {
  return (
    <>
      <div
        className=" flex justify-between gap-5 pt-5 bg-white pb-3 sticky top-0 border-solid  
shadow-lg"
      >
        <Link to="/" className="flex pl-2">
          <img src={logoIcon} alt="logoicon" className="w-[10rem] h-[2.5rem]" />
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search"
            className=" outline-none border-solid border-2 rounded-sm py-1 px-2 placeholder:p-2"
          />
        </div>
        <div className="flex gap-5 pr-2">
          <Link to="/login">
            <button className=" cursor-pointer relative z-100 bg-blue-500 py-2 px-4 rounded-sm text-white font-bold">Login</button>
          </Link>
          <Link to="/signup">
            <button className=" cursor-pointer relative z-100 text-blue-500 py-2 px-4 rounded-sm font-bold">Signup</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
