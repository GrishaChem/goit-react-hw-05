import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services";
import { Link } from "react-router-dom";
import s from "../HomePage/Homepage.module.css";

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
        {movies.map((movie) => (
          <li key={movie.id}>
            {console.log(movie.id)}
            <Link to={"/movie/" + movie.id.toString()}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
