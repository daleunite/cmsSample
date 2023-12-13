import React from "react";
import { Link } from "react-router-dom";


const AdminPanel = () => {
  return (
    <>
    <div className="flex justify-end">
      <Link to='/'>
      <button>Logout</button>
      </Link>
    </div>
      <div className="h-[100vh] w-full bg-slate-600 flex items-center justify-center">
        <p className="text-[5rem] font-bold text-white">Welcome back, Admin</p>
      </div>
    </>
  );
};

export default AdminPanel;
