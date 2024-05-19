import { useEffect, useState } from "react";

function useCoordinates() {
  const [coordinate, setCoordinate] = useState({
    lat: 0,
    long: 0,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoordinate({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  return coordinate;
}
export default useCoordinates;
