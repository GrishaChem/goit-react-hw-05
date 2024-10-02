import React, { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import { fetchMovieById } from "../../services";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <hr />
      <div>
        <NavLink to="info">Info</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
