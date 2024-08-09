import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({ capital }) => {
    const api_key = import.meta.env.VITE_SOME_KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`;
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                console.log(response.data);
                setWeather(response.data);
            }) 
    }, [url]);

    if (weather === null) {
        return <div></div>
    }
    
    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>temperature {weather.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].description}`} />
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather;