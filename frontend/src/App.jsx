import HeroSection from "./components/HeroSecton.jsx";

import MoviesSection from "./pages/MoviesSection.jsx";
import Movie from "./pages/Movie.jsx";
import fetchData from "./services/fetchData.js";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogIn = () => {
    setLoggedIn(!loggedIn);
  };
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
    <main className="min-h-screen flex flex-col">
      <Routes>
        <Route
          path="/"
          element={<MainLayout handleLogIn={handleLogIn} loggedIn={loggedIn} />}
        >
          <Route
            path="/"
            element={
              <div>
                <HeroSection handleLogIn={handleLogIn} loggedIn={loggedIn} />{" "}
                <MoviesSection movies={movies} />
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
