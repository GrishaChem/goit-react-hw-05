import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services";
import { Link } from "react-router-dom";
import s from "./Homepage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

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

  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      {isLoading && <h2>Is Loading ...</h2>}
      <h1>Trending Today</h1>
      <ul className={s.container}>
        <MovieList movies={movies} />
      </ul>
    </div>
  );
};

export default HomePage;
