import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <div className="home-page">

      <section className="home-hero">

        <p className="home-small-title">
          SIMPLE TASK MANAGEMENT
        </p>

        <h1>
          Organize Your
          <span> Daily Tasks.</span>
        </h1>

        <p className="home-description">
          A simple and clean To-Do List application
          to manage your everyday tasks.
        </p>

        <Link to="/todos" className="start-btn">
          Start Adding Tasks →
        </Link>

      </section>

    </div>
  );
};

export default Home;