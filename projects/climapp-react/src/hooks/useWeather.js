import { useState, useEffect } from 'react';
// import { getCityByButton } from '../exportCity.js';

export function useWeather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  //aqui refr
  const refreshCity=(cityname)=>{
    setCity(cityname)
    console.log()
    }
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const urlByCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=es&units=metric&appid=359f4eb1804694c7e4a88200c1039b68`;

      fetch(urlByCoords)
        .then(response => response.json())
        .then(data => {
          setCity(data.name);
        })
        .catch(error => {
          console.error('Error fetching weather by coordinates:', error);
        });
    });
  }, []);

  useEffect(() => {
    if (city) {
      const urlByCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=359f4eb1804694c7e4a88200c1039b68`;
      fetch(urlByCity)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
        })
        .catch(error => {
          console.error('Error fetching weather by city:', error);
        });
    }
  }, [city]);

  return { city, weather, refreshCity};
}
