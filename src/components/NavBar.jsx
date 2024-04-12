import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "/images/flogo.jpeg";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogIn = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-lg font-bold cursor-pointer ">
            <img src={Logo} width={"60px"} />
          </div>
        </Link>

        {loggedIn ? (
          <button
            onClick={handleLogIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={handleLogIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
