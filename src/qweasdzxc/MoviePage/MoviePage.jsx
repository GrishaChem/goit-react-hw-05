import React, { useEffect, useState } from "react";
import s from "./MoviePage.module.css";
import { Field, Form, Formik } from "formik";
import SearchBar from "../../components/Searchbar/SearchBar";
import { fetchMoviesByQuery } from "../../services";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const MoviePage = ({}) => {
  const [movies, setMovies] = useState([]); // Стейт для хранения данных о фильмах

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location);
  const query = searchParams.get("query") ?? "";

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getData = async () => {
      if (query.trim() === "") return; // Если запрос пустой, не выполняем запрос
      const data = await fetchMoviesByQuery(query); // Получаем данные по запросу
      setMovies(data.results); // Если есть результаты, обновляем стейт
      console.log(data);
    };

    getData(); // Вызываем функцию для получения данных
  }, [query]); // Запускать эффект при изменении query

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <ul className={s.container}>
        {movies.map((movie) => (
          <li key={movie.id}>
            {console.log(movie.id)}
            <Link to={"/movie/" + movie.id.toString()} state={location}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;
