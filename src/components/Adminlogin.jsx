import React from "react";

const Adminlogin = () => {
  return (
    <>
      <form
        action=""
        className="flex flex-col border-solid border-2 border-indigo-600 items-center"
      >
        <input
          className=" w-[80%] border-solid border-2 border-b-slate-600"
          type="text"
        />
        <input
          className=" w-[80%] border-solid border-2 border-b-slate-600"
          type="text"
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Adminlogin;
