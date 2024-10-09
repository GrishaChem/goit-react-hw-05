import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <li key={movie.id}>
          {console.log(movie.id)}
          <Link to={"/movies/" + movie.id.toString()}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export default MovieList;
