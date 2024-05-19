import "./Humidity.css";
export default function Humidity({ humidity }) {
  const WEEK_DAYS = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div className="humidity">
      <h2>Humidity throughout the Week</h2>
      {humidity.slice(0, 6).map((item, idx) => (
        // <p >{item.humidity}</p>
        <div key={item.dt} className="humidChart">
          <p>{forecastDays[idx]}</p>
          <div
            style={{
              width: "65%",
              outline: "1px solid white",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: `${item.humidity}%`,
                background: "red",
                height: "10px",
              }}
            ></div>
          </div>
          <span>{item.humidity} %</span>
        </div>
      ))}
    </div>
  );
}
