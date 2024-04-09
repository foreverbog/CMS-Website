import HeroSection from "./components/HeroSecton.jsx";

import MoviesSection from "./pages/MoviesSection";
import Movie from "./pages/Movie";
import fetchData from "./services/fetchData";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";

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

  return (
    <main className="flex flex-col">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/"
            element={
              <div>
                <HeroSection /> <MoviesSection movies={movies} />
              </div>
            }
          />
          <Route path="/:movieTitle" element={<Movie movies={movies} />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
