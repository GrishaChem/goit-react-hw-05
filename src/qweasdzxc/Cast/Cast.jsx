import React, { useEffect, useState } from "react";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";
import { fetchCreditsById } from "../../services";
import s from "./Cast.module.css";

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCreditsById(movieId);
      setMovie(data);
      console.log(data);
    };
    getData();
  }, [movieId]);
  if (!movie) return <h2>Loading...</h2>;
  return (
    <div>
      <div>
        <ul className={s.outlet}>
          {movie.cast.map((character) => (
            <li key={character.credit_id}>
              <img
                className={s.img}
                src={
                  "https://image.tmdb.org/t/p/w500/" + character.profile_path
                }
              />
              <p>{character.character}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cast;
