import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Todos from "./pages/Todo";
import About from "./pages/About";
import "./App.css";


const App = () => {
  return (
  <div>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
  </div>
  );
};

export default App;