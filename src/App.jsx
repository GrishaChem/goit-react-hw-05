import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import MoviePage from "./Pages/MoviePage/MoviePage";
import NotFound from "./Pages/NotFound/NotFound";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movie" element={<MoviePage />} />
        <Route path="/Movie/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
