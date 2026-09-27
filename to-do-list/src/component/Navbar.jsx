import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  const location = useLocation();

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">
          MyTodo
        </Link>
      </div>

      <div className="navbar-links">

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          to="/todos"
          className={location.pathname === "/todos" ? "active" : ""}
        >
          Todos
        </Link>

        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;