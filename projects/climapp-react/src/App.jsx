import './App.css'
import { useWeather } from './hooks/useWeather'
import { useState } from 'react'
import { WeatherDisplay } from './components/weatherDisplay'
export  function App() {
  //useWeather() es un custom hook que devuelve un objeto con tres propiedades: city, weather y refreshCity
  //Un custom hook es una función que usa otros hooks
  const {city, weather, refreshCity}= useWeather()
  const [inputCity, setInputCity] = useState('')

  const handleClick =() => {
    refreshCity(inputCity)
  }
    
  return (
    <>
    <aside className='renderApp'>
    <WeatherDisplay city={city} weather={weather}/>
   
    <input 
          type="text" 
          placeholder="City" 
          value={inputCity} // Enlaza el valor del input al estado
          onChange={(e) => setInputCity(e.target.value)} // Maneja el cambio del input
        />
    <button onClick={handleClick}>Buscar</button>
   
   </aside>
    </>
  )
}

