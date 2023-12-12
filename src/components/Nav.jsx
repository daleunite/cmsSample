import React, { useState } from "react";

//import LoginForm
import LoginForm from "./LoginForm";

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex justify-end gap-5">
      <button
        onClick={() => setShow((prev) => !prev)}
        className=" cursor-pointer relative z-100"
      >
        Login
      </button>
      {show && (
        <div className="fixed w-full h-full mt-5">
          <LoginForm />
        </div>
      )}
      <button>Signup</button>
    </div>
  );
};

export default Nav;
