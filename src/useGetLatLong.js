import { useEffect, useState } from "react";

export default function useGetLatLong({ searchItem }) {
  const [newLatLong, setNewLatLong] = useState({
    lat: 0,
    long: 0,
  });
  console.log(searchItem);
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${searchItem}&limit=1&appid=f8a076295fef04f86bc9699a68f0c99b`
    ).then(async (response) => {
      const Response = await response.json();
      console.log(Response);
      setNewLatLong({ lat: Response[0].lat, long: Response[0].lon });
    });
  }, [searchItem]);

  return newLatLong;
}
