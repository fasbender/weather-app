import {useState, useEffect} from "react"
import axios from "axios"
import './App.css';

function App() {

  const [weather, setWeather] = useState([])
  const [search, setSearch] = useState("")

  const Weather = async() => {
    try {
      const temp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&APPID=SECRET`)
      setWeather(temp.data.main) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Weather()
  }, [])
  console.log(weather)

  return (
    <div className="App">
      {weather.temp}
    </div>
  );
}

export default App;
