import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
  const [expand, toggleExpand] = useState(false);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    let isCancelled = false;

    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${country.capital}`)
      .then(response => {
        if (!isCancelled) {
          const newWeather = response.data.current;
          setWeather(newWeather);
        }
      })

    return () => {
      isCancelled = true;
    }
  }, [country.capital])

  const handleClick = () => {
    toggleExpand(!expand)
  }

  return expand ? (
    <div>
      <button onClick={handleClick}>hide</button>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>languages</h3>
      <ul>
        {
          country.languages.map(language => (
            <li key={language.name}>
              {language.name}
            </li>
          ))
        }
      </ul>
      <img src={country.flag} alt={country.name} width="120" />
      <h3>Weather in {country.capital}</h3>
      <div>
        <strong>temperature: </strong>
        {weather.temperature} Celsius
      </div>
      <img src={weather.weather_icons[0]} alt={weather.weather_descriptions} width="80" />
      <div>
        <strong>wind: </strong>
        {weather.wind_speed} mph direction {weather.wind_dir}
      </div>
    </div>
  ) : (
      <div>
        {country.name}
        <button onClick={handleClick}>show</button>
      </div>
    )

}

export default Country;