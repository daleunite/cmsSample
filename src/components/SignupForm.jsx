import React from "react";
import loginimg from "../assets/img/loginimg.png";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const SignupForm = () => {
  return (
    <>
      <Nav />
      <div className="h-[100vh] flex justify-center items-center">
        <form
          onSubmit={""}
          action=""
          className=" w-[90%] flex flex-col border-solid border-2 border-black-500
     items-center rounded-sm md:max-w-[850px] bg-slate-300"
        >
          <div
            className="w-full flex flex-col
     items-center rounded-sm md:flex-row "
          >
            <div className=" hidden md:flex ">
              <img src={loginimg} alt="" />
            </div>
            <div className="w-[100%] flex flex-col items-center ">
              <span className="text-[1.8rem] mt-5  font-bold">
                Create Account
              </span>
              <div
                className="border-solid border-b-2
       border-b-blue-500 font-bold w-[2.1rem] pt-1"
              ></div>
              <input
                className="mt-10 p-2 w-[80%] border-solid border-b-2
      border-b-black-600 outline-none rounded-sm"
                placeholder="Full Name:"
                type="text"
                name="uname"
                required
              />
                   <input
                className=" mt-5 p-2 w-[80%] border-solid border-b-2
      border-b-black-600 outline-none rounded-sm"
                placeholder="Email Address:"
                type="email"
                name="pass"
                required
              />

              <input
                className=" mt-5 p-2 w-[80%] border-solid border-b-2
      border-b-black-600 outline-none rounded-sm"
                placeholder="Password:"
                type="password"
                name="pass"
                required
              />

              <div className="w-[80%]">
                <input
                  type="submit"
                  value="Create Account"
                  className="w-full mt-10 bg-blue-500 py-2 text-white font-bold rounded-sm"
                />

                <div className="flex pt-5 pb-10 gap-3">
                  <span>Already Have An Account?</span>
                  <Link to="/login">
                    <span className=" font-semibold cursor-pointer">
                      Log in
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
