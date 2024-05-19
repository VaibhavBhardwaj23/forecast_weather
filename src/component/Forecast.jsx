import "./Forecast.css";

export default function Forecast({ forecast }) {
  const WEEK_DAYS = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div className="forecastCards">
      {forecast.daily.slice(0, 6).map((item, idx) => (
        <div className="cardsForecast" key={idx}>
          <p>{forecastDays[idx]}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt="Icon"
            className="Icon"
          ></img>
          <div className="highLow">
            <p>{Math.round(item.temp.max)}°C</p>
            <p>{Math.round(item.temp.min)}°C</p>
          </div>
        </div>
      ))}
    </div>
  );
}
