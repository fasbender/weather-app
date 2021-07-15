import {useState, useEffect} from "react"
import axios from "axios"
import './App.css';

function App() {

  const [weather, setWeather] = useState([])

  const Weather = async() => {
    try {
      const temp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=dac242caca04bcb5e721534038fb57bd`)
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
      
    </div>
  );
}

export default App;
