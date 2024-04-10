import React from "react";
import curtainsImage from "../assets/popcorn.jpeg";

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${curtainsImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center justify-center h-screen text-white"
    >
      <h1 className="text-5xl font-bold mb-4 pr-80">Welcome!</h1>
      <h2 className="text-5xl font-bold mb-4 pr-80">
        To the Cinemma Experience
      </h2>
      <br />
      <button className="px-6 py-3 mr-80 bg-white text-blue-500 font-bold rounded hover:bg-gray-100 transition duration-200">
        Open Library
      </button>
    </div>
  );
};

export default HeroSection;
