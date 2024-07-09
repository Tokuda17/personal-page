// src/App.js
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <body>
        <Home />
        <h1>Latest Projects</h1>
        <h1>Experience</h1>
        <h1>Contact Information</h1>
      </body>
    </>
  );
}

export default App;
