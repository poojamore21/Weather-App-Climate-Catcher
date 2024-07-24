

import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Weatherpage.css'; // Import your CSS file

const Weatherpage = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const getWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/weather/${city}`);
            setWeather(response.data);
            setError('');
        } catch (err) {
            setError('Error fetching weather data');
            setWeather(null);
        }
    };

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <div className="input-container">
                <input
                    type="search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                />
                <button onClick={getWeather}>Get Weather</button>
            </div>
            {error && <p>{error}</p>}
            {weather && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>{weather.main.temp}°C</p>
                    <p>Latitude: {weather.coord.lat}</p>
                    <p>Longitude: {weather.coord.lon}</p>
                </div>
            )}
        </div>
    );

}

export default Weatherpage;
