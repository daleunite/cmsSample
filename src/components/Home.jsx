import React, { useState } from "react";
import data from "../data/course.json";
import Nav from './Nav'

const Home = () => {
  const { courses } = data;


  return (
    <>
    <Nav/>
      <div className="w-full h-[100vh] flex flex-wrap justify-between p-10 mt-10">
        {courses.map((c, idx) => {
          return (
            <div
              key={idx}
              className="w-[30%] h-[25vh] border-solid border-2
              border-black-600 flex items-center justify-center"
            >
              <p>{c.course}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
