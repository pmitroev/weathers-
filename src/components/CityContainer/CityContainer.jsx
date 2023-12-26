import './CityContainer.css';

function CityContainer({ weatherData }) {

    return (
        <div className="main">
            {weatherData && (
                <div className="weather-container">
                    <div className="weather-city">{weatherData.name}</div>
                    <div className="weather-type">{weatherData.weather[0].main}</div>
                    <div className="weather-description">{weatherData.weather[0].description}</div>
                    <div className="weather-info">
                        <div className="temperature">{(weatherData.main.temp).toFixed(0)}°C</div>
                        <div className="additional-info">
                            <div className="feels-like">Feels like: {(weatherData.main.feels_like.toFixed(0))}°C</div>
                            {/* <div className="temp-min">Min: {(weatherData.main.temp_min).toFixed(0)}°C</div> */}
                            {/* <div className="temp-max">Max: {(weatherData.main.temp_max.toFixed(0))}°C</div> */}
                            <div className="humidity">Humidity: {weatherData.main.humidity}%</div>
                        </div>
                    </div>
                </div>
            
            )}
        </div>
    )
}

export default CityContainer;