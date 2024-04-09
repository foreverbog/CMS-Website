


import React from 'react';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-96 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
            <button className="px-6 py-3 bg-white text-blue-500 font-bold rounded hover:bg-gray-100 transition duration-200">
                Open Library
            </button>
        </div>
    );
};

export default HeroSection;
