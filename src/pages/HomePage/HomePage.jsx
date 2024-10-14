import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services";
import { Link } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllMovies();
  }, []);

  return (
    <div>
      {isLoading && <h2>Is Loading ...</h2>}
      <h1>Trending Today</h1>

      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
