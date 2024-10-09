import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";
import clsx from "clsx";
// import clsx from "clsx";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <div className={s.container}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
