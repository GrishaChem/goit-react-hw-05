import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
// import HomePage from "./Pages/HomePage/HomePage";
// import MoviePage from "./Pages/MoviePage/MoviePage";
// import NotFound from "./Pages/NotFound/NotFound";
// import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
// import Cast from "./Pages/Cast/Cast";
// import Reviews from "./Pages/Reviews/Reviews";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("./Pages/MoviePage/MoviePage"));
const NotFound = lazy(() => import("./Pages/MoviePage/MoviePage"));
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage")
);
const Cast = lazy(() => import("./Pages/Cast/Cast"));
const Reviews = lazy(() => import("./Pages/Reviews/Reviews"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Movie" element={<MoviePage />} />
          <Route path="/Movie" element={<MoviePage />} />
          <Route path="/Movie/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
