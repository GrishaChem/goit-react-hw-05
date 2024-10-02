import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const data = await fetchMovies;
      setMovies(data);
    };
    getAllMovies;
  }, []);

  return <div>asdasd</div>;
};

export default HomePage;
