import React from "react";
import { FaTrash } from "react-icons/fa";
import { IoMdRefresh, IoMdAdd } from "react-icons/io";

//import data for courses
import data from '../../data/course.json'

const Courses = () => {
    const {courses} = data
  return (
    <div className="flex justify-between items-end">
      <div>Courses</div>
      <div className="flex gap-3 pr-3">
        <span>
          <IoMdAdd />
        </span>
        <span>
          <FaTrash />
        </span>
        <span>
          <IoMdRefresh />
        </span>
      </div>
    </div>
  );
};

export default Courses;
