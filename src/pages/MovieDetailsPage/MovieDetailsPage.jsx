import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import { fetchMovieById } from "../../services";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  const location = useLocation();
  console.log(location);
  const goBack = useRef(location.state ?? "/");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data);
      console.log(data);
    };
    getData();
  }, [movieId]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div>
      <Link to={goBack.current}>Go back</Link>
      <div className={s.container}>
        <img
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          alt=""
        />
        <div>
          <h2>{movie.title}</h2>
          <p>{`User score: ${Math.round(10 * movie.vote_average)}%`}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <div className={s.genres}>
            {movie.genres.map((mov) => (
              <p key={mov.id}>{mov.name}</p>
            ))}
          </div>
        </div>
      </div>
      <h2>Additional information</h2>
      <div className={s.Nav}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <div>
        <Suspense>
          <Outlet className={s.outlet} />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
