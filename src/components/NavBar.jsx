import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h2>Anywhere Fitness</h2>
      <nav>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="lorem">
          <p>Lorem</p>
        </NavLink>
        <NavLink to="ipsum">
          <p>Ipsum</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
