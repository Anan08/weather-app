import { useState } from 'react'
import './App.css'

const api = {
  key : "21f0749ebfcff53a7146056030cd104c",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [search, setsearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      setWeather(result);
    });
  }
  return (
    <>
    <div className="app">
      {/* header */}
      <h1>weather app</h1>

      {/* search Bar */}
      <div className="form">
      <input
       type="text" 
       placeholder='Search...'
       onChange={e => setsearch(e.target.value)}
       />

       <button onClick={searchPressed}>Search</button>
      </div>


       {/* Location */}
      <h1>{weather.name}</h1>

       {/* Temperature */}
      {weather.main && weather.main.temp && (<p>{weather.main.temp} *C </p>)}


      {/* condition */}
      {weather.weather && weather.weather[0]&& weather.weather[0].description && (<p>{weather.weather[0].description}</p>)}
    </div>
    </>
  )
}

export default App
