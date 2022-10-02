import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setShowCity] = useState("");
  let [description, setShowDescription] = useState("");

  function display(response) {
    setShowDescription({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function showCity(event) {
    event.preventDefault();
    setShowCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2881e3d61ec2ba64d89fe66a778a8135&units=metric`;
    axios.get(url).then(display);
  }
  let form = (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={showCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  if (description) {
    return (
      <div className="DescriptionForm">
        {form}
        <ul>
          <li>Temperature: {Math.round(description.temperature)}°C</li>
          <li>Description: {description.description}</li>
          <li>Humidity: {description.humidity}%</li>
          <li>Wind: {description.wind}m/s</li>
          <li>
            <img src={description.icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
