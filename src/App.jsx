import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import useFetchWeather from "./hooks/useFetchWeatherStart";
import TodayWeather from "./component/TodayWeather";
import Forecast from "./component/Forecast";
import Humidity from "./component/Humidity";
import { Map } from "./component/Map";

function App() {
  const [response, setResponse] = useState({ newLat: 0, newLong: 0 });
  const { weather, forecast } = useFetchWeather(response);
  const handleSearchClick = (query) => {
    setResponse({ newLat: query.latitude, newLong: query.longitude });
  };
  return (
    <div className="main">
      <Navbar handleSearchClick={handleSearchClick} />
      <div className="actualResult">
        <div className="results">
          {weather && <TodayWeather weather={weather} />}
          {forecast && <Forecast forecast={forecast} />}
        </div>
        <div className="humidResult">
          {forecast && <Humidity humidity={forecast.daily} />}
        </div>
      </div>
      <Map response={response} />
    </div>
  );
}

export default App;
