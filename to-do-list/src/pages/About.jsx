import React from "react";

import "./about.css";

const About = () => {
  return (
    <div className="about-page">

      <div className="about-container">

        <p className="about-tag">
          ABOUT MYTODO
        </p>

        <h1>
          Simple tools for
          <span> everyday productivity.</span>
        </h1>

        <p>
          MyTodo is a simple task management application
          built with React. It helps you create, complete
          and delete your daily tasks easily.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>Simple</h3>

            <p>
              Easy interface with no unnecessary features.
            </p>
          </div>

          <div className="about-card">
            <h3>Fast</h3>

            <p>
              Quickly add and manage your daily tasks.
            </p>
          </div>

          <div className="about-card">
            <h3>Clean</h3>

            <p>
              Clean and responsive design for every device.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;