import React, { useState } from "react";
import "./App.css";
import "./Search.css";
import FormatDate from "./FormatDate";
import FormatTime from "./FormatTime";
import logo from "./images/cloud.png";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemp(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
  }

  function search() {
    const apiKey = "302194042e30cf68ae215cbabca7559f";
    let unitsType = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitsType}`;
    axios.get(apiUrl).then(showTemp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <>
        <form id="form-search" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            className="search"
            placeholder=""
            onKeyPress={handleCityChange}
          />
        </form>
        <form className="grid-first">
          <div className="today-data">
            <div className="time" id="time">
              <FormatTime />
            </div>
            <div className="date" id="date">
              <FormatDate />
            </div>
          </div>
          <div className="city">
            <h2 id="city">{weatherData.city}</h2>
          </div>
        </form>
        <form className="main-form">
          <div className="data" id="value">
            <div className="temperature" id="temperature">
              {weatherData.temperature}°
              <img src={logo} alt={"logo"} className="temperature" />
            </div>
            <h2 id="description">{weatherData.description}</h2>
          </div>
          <div className="data" id="humidity">
            Humidity: {weatherData.humidity}%
          </div>
          <div className="data" id="wind">
            Wind: {weatherData.wind}km/h
          </div>
        </form>

        <form className="footer-weather-form" id="main"></form>
      </>
    );
  } else {
    return (
      <>
        <form id="form-search" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Enter location"
            onKeyPress={handleCityChange}
          />
        </form>
        <form className="grid-first">
          <div className="today-data">
            <div className="time" id="time">
              <FormatTime />
            </div>
            <div className="date" id="date">
              <FormatDate />
            </div>
          </div>
          <div className="city">
            <h2 id="city">{city}</h2>
          </div>
        </form>
        <h1>Please enter the location</h1>
        <div className="preloader">
          <ThreeCircles
            color="blue"
            height={110}
            width={110}
            ariaLabel="three-circles-rotating"
            outerCircleColor="black"
            middleCircleColor="black"
            innerCircleColor="grey"
          />
        </div>
      </>
    );
  }
}
