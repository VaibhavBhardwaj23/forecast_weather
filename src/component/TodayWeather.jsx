import "./Today.css";

export default function TodayWeather({ weather }) {
  const todayweather = weather;
  const image = weather.weather[0].icon;
  const date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const img = `https://openweathermap.org/img/wn/${image}@2x.png`;
  const today = days[date.getDay()];
  // Get current time
  var currentTime = new Date();

  // Format time to display nicely
  var formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="todays_card">
      <div className="date_time">
        <p>{today}</p>
        <p>{formattedTime}</p>
      </div>
      <div className="temperature">
        <h2>{Math.round(todayweather.main.temp)} °</h2>
        <img src={img} />
      </div>
      <div className="additionalInfo">
        <div>
          <p>
            Real Feel: <span>{Math.round(todayweather.main.feels_like)} °</span>
          </p>
          <p>
            Wind N-E: <span> {todayweather.wind.speed} kmph</span>
          </p>
          <p>
            Pressure: <span>{todayweather.main.pressure}</span>{" "}
          </p>
          <p>
            Humidity: <span> {todayweather.main.humidity}</span>
          </p>
        </div>
        <div>
          <p>
            Max Temp: <span>{todayweather.main.temp_max}</span>
          </p>
          <p>
            Min Temp: <span>{todayweather.main.temp_min}</span>
          </p>
          <p>
            Visibilty: <span>{todayweather.visibility}</span>
          </p>
          <p>
            Description:{" "}
            <span>{todayweather.weather[0].description.toUpperCase()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
