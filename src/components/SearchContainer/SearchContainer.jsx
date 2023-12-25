import React from "react";

import "./SearchContainer.css";

import Logo from "../../assets/images/logo2.png";

function SearchContainer({ setWeatherData }) {
    
    async function handleSearch() {
        const API_KEY = '17630bdd05eee45d88f226e1f6ed84ce';
        
        let city = document.getElementById("searchField").value;
        if (city === "" || city === null) {
            alert("There is no such city, try something else.");
            return 0;
        }
        
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        try {
            let response = await fetch(URL);
            
            if (!response.ok) {
                throw new Error("City not found or other error occurred.");
            }
            let data = await response.json();
            setWeatherData(data);
            
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="main">
            <div className="search-container">
                <h3>Weathers'</h3>
                <img src={Logo} alt="logo" />
                <div className="input-button">
                    <input
                        id="searchField"
                        type="text"
                        required
                        placeholder="Find your desired city"
                    />
                    <button onClick={() => handleSearch()}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchContainer;
