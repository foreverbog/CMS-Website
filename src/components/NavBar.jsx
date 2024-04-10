import React from "react";
// import Logo from "./public/logo.png"zzzzzzzzzzzzzzzzzz;
import Logo from "/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <img src={Logo} width={"40px"} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
