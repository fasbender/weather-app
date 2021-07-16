import { useState } from "react"
import { Container } from "@material-ui/core"
import Cards from "./components/Card"
import axios from "axios"
import api from "./Api/Api"
import './App.css';

function App() {

  const [weather, setWeather] = useState([])
  const [temperature, setTemperature] = useState([])
  const [search, setSearch] = useState("")

  const Weather = async(e) => {
    if(e.key === "Enter") {
      try {
        const heat = await axios.get(`${api.baseUrl}weather?q=${search}&units=metric&APPID=${api.apiKey}`)
        setSearch("")
        setWeather(heat.data)
        setTemperature(heat.data.main) 
      } catch (error) {
        console.log(error)
      }
    } else {
      return "Location not found"
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <Container maxWidth="sm" className="container">
          <Cards Weather={Weather} weather={weather} search={search} setSearch={setSearch} temperature={temperature} date={dateBuilder}/>
      </Container>
    </div>
  );
}

export default App;
