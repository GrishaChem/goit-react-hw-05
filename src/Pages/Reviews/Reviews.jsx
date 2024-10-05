import React, { useEffect, useState } from "react";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";
import { fetchReviewsById } from "../../services";
import s from "../Cast/Cast.module.css";
const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewsById(movieId);
      setMovie(data);
      console.log(data);
    };
    getData();
  }, [movieId]);
  if (!movie) return <h2>Loading...</h2>;
  if (!movie.results.length > 0) return <h2>There are no reviews</h2>;
  return (
    <ul className={s.container}>
      {movie.results.map((review) => (
        <li className={s.review} key={review.id}>
          <h2 className={s.author}>Author: {review.author}</h2>
          <p className={s.contnet}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
