import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Header/Navigation";
// import HomePage from "./Pages/HomePage/HomePage";
// import MoviePage from "./Pages/MoviePage/MoviePage";
import NotFound from "./pages/NotFound/NotFound";
// import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
// import Cast from "./Pages/Cast/Cast";
// import Reviews from "./Pages/Reviews/Reviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const NotFound = lazy(() => import("./Pages/MoviePage/MoviePage"));

import MovieCast from "./components/MovieCast/MovieCast";

import MovieReviews from "./components/MovieReviews/MovieReviews";

const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("./components/MovieCast/MovieCast"));
const Reviews = lazy(() => import("./components/MovieReviews/MovieReviews"));

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
