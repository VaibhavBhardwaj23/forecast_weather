import { useEffect, useState } from "react";
import useCoordinates from "./useCoordinates";

export default function useFetchWeather(response) {
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const { lat, long } = useCoordinates();
  const { newLat, newLong } = response;
  let latitude = newLat === 0 ? lat : newLat;
  let longitude = newLong === 0 ? long : newLong;
  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=8ab0c860b73dfb62cdf3da5abcf64869`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("Weather API request failed");
          }
          return res.json();
        })
        .then((result) => {
          setWeather(result);
        })
        .catch((error) => {
          console.error("Error fetching weather:", error);
        });

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=49cc8c821cd2aff9af04c9f98c36eb74`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Forecast API request failed");
          }
          return response.json();
        })
        .then((foreCastResponse) => {
          setForecast(foreCastResponse);
        })
        .catch((error) => {
          console.error("Error fetching forecast:", error);
        });
    }
  }, [latitude, longitude]);
  return { weather, forecast };
}
