import HeroSection from "./components/HeroSecton.jsx";

import Footer from "./components/Footer.jsx";

import Navbar from "./components/NavBar";

import MoviesSection from "./pages/MoviesSection";
import Movie from "./pages/Movie";
import fetchData from "./services/fetchData";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchData();
        setMovies(data.items);
      } catch (error) {
        console.error("Could not get data", error);
      }
    };
    fetchMovies();
  }, []);
  // Decode movieTitle (replace '%20' with space)

  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection /> <MoviesSection movies={movies} />
            </div>
          }
        />
        {/* <Route path="/" element={<MoviesSection movies={movies} />} /> */}
        <Route path="/:movieTitle" element={<Movie movies={movies} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
