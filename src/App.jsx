import { useState } from "react";

import "./App.css";

import SearchContainer from "./components/SearchContainer/SearchContainer";
import CityContainer from "./components/CityContainer/CityContainer";

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [cityFound, setCityFound] = useState(false);

    const handleCityFound = (data) => {
        setCityFound(true);
        setWeatherData(data);
    }
  
    return (
        <div className={`app-container ${cityFound ? 'grid-shift' : ''}`}>
            <div className="search-container">
                <SearchContainer setWeatherData={handleCityFound}/>
            </div>
            <div className={`city-container ${cityFound ? 'slide-in' : ''}`}>
                {cityFound && <CityContainer weatherData={weatherData}/>}
            </div>
        </div>
    );
}

export default App;
