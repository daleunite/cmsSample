import React from "react";

const Adminlogin = () => {
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <form
          action=""
          className="h-[80vh] w-[90%] flex flex-col border-solid border-2 border-black-600
           items-center rounded-sm md:max-w-[950px]"
        >
          <span className="text-[1.8rem] mt-5  font-bold">Log In</span>
          <div className="border-solid border-b-2
             border-b-blue-500 font-bold w-[2.1rem] pt-1"></div>
          <input
            className="mt-10 p-2 w-[80%] border-solid border-b-2
             border-b-black-600 outline-none "
            placeholder="Username:"
            type="text"
          />
          <input
            className=" mt-10 p-2 w-[80%] border-solid border-b-2
             border-b-black-600 outline-none"
            placeholder="Password:"
            type="text"
          />
          <div className="w-[80%] pt-[3rem]">

          <div className="  flex justify-between text-blue-700">
            <div className="flex gap-2">
              <input type="checkbox" name="checks" id="check" className="cursor-pointer" />
              <label htmlFor="check">Remeber Me</label>
            </div>
            <div className=" cursor-pointer">
              <span>Forget Password?</span>
            </div>
          </div>
          <button className="w-full mt-10 bg-blue-500 py-2">Login</button>
          <div className="flex pt-5 gap-3">
            <span>Don't Have An Account?</span>
            <span className=" font-semibold">Click Here</span>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Adminlogin;
