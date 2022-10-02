import "./App.css";
import React from "react";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />

      <p>
        {" "}
        This project was coded by{" "}
        <a href="https://taupe-bienenstitch-309e9f.netlify.app/">
          Margareta Krajnikovics
        </a>{" "}
        and is <a href="https://github.com/Ritulja/weather-app">open-source.</a>
      </p>
    </div>
  );
}

export default App;
