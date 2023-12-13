import React from "react";
import { SlOptionsVertical } from "react-icons/sl";


//import data for courses
import data from '../../data/course.json'

const Courses = () => {
    const {courses} = data
  return (
    <div className="flex justify-between items-end">
      <div className="w-full flex flex-wrap justify-between h-[65vh] overflow-auto mt-5 gap-y-5">
        {
          courses.map((c,  idx) => {
            return (
              <div key={idx} className="w-[37vw] h-[20vh] border-solid border-[.05rem]
               border-black rounded-sm gap-x-3 flex justify-between p-2">
                {c.course}
                <SlOptionsVertical />
              </div>
            )
          })
        }
      </div>
   
    </div>
  );
};

export default Courses;
