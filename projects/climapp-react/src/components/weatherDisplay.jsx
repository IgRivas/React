/* eslint-disable react/prop-types */
import '../App.css'
export function WeatherDisplay({weather}){
        return (
            <>
            <aside className='weatherDisplay'> 
            <p id='cityName'>Ciudad: {weather && weather.name}</p>
            <p>Temperatura: {weather && weather.main.temp} ºC</p>
            <p>Humedad: {weather && weather.main.humidity} %</p>
            <p>Viento: {weather && weather.wind.speed} m/s</p>
            <p>Condiciones: {weather && weather.weather[0].description}</p>

            <img id='imgWeather' src={weather && `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon"/>
            </aside>
            </>
        )
    }
