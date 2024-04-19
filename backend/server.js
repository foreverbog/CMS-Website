import express from "express";
import movies from "./data/data.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(movies);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const oneMovie = movies.find((movie) => movie.id === id);
  res.json(oneMovie);
});

app.listen(5000, () => {
  console.log("Server is running on port 500");
});
