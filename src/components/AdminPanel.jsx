import React from "react";
import { Link } from "react-router-dom";

import logoIcon from "../assets/img/logo.png";

//import admin info
import Courses from "./admin/Courses";
import Sample from "./admin/Sample";
import Users from "./admin/Users";

const AdminPanel = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="w-full flex justify-between gap-5 pt-5 bg-white pb-3 sticky top-0 border-solid  
    shadow-lg"
      >
        <div className="flex">
          <Link to="/" className="pl-2">
            <img
              src={logoIcon}
              alt="logoicon"
              className="w-[10rem] h-[2.5rem]"
            />
          </Link>
        </div>
        <Link to="/" className="pr-2">
          <button className="flex text-blue-500 font-bold py-2 px-4">
            Logout
          </button>
        </Link>
      </div>

      <div className="flex w-[90%] mt-5">
        <div className="p-10 flex flex-col items-start gap-5">
          <button>Courses</button>
          <button>Users</button>
          <button>Sample</button>
          <button>Sample</button>
        </div>
        <div className="h-[90vh] w-full flex items-center justify-between">
          <div className="h-[75vh] border-solid border-[.05rem] border-l-500 border-black"></div>
          <div className="h-[90vh] w-full pt-10 pl-5">
            <p>Welcome back, Admin</p>
            <Courses />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
