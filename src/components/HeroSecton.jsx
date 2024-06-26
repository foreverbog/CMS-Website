import React from "react";
import curtainsImage from "/images/popcorn.jpeg";

const HeroSection = ({ loggedIn }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${curtainsImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center justify-center h-screen text-white "
    >
      <div className="bg-black/20 text-balance text-center p-8  rounded-3xl ">
        {!loggedIn ? (
          <h1 className="text-5xl font-bold mb-4 ">Welcome!</h1>
        ) : (
          <h1 className="text-5xl font-bold mb-4 ">Welcome Back!</h1>
        )}
        <h2 className="text-5xl font-bold mb-4 text-balance text-center">
          To the CineKara Experience
        </h2>
        <br />
      </div>
      <button className="px-6 py-3  bg-white text-blue-500 font-bold rounded hover:bg-gray-100 transition duration-200 mt-4">
        Open Library
      </button>
    </div>
  );
};

export default HeroSection;
