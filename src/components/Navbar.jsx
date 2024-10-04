import React from "react";

const Navbar = () => {
  return (
    <div className="mt-5 fixed top-0  flex justify-between gap-20 ">
      <h1 className="text-red-200 text-3xl text-center my-5">KDNPLUS</h1>
      <button className="text-xl bg-red-500 px-5 -py-10 rounded-xl">
        Login
      </button>
    </div>
  );
};

export default Navbar;
