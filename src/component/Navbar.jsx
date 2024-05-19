/* eslint-disable react/prop-types */
import "./Navbar.css";
import search from "../assets/searchIcon.png";
import { useState } from "react";
export default function Navbar({ handleSearchClick }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=f8a076295fef04f86bc9699a68f0c99b`
    ).then(async (response) => {
      const Response = await response.json();
      handleSearchClick({
        latitude: Response[0].lat,
        longitude: Response[0].lon,
      });
    });
  };
  return (
    <div>
      <div className={`${open ? "open" : ""} searchBar`}>
        <div onClick={() => setOpen(!open)} className="img_box">
          <img className="searchImage" src={search}></img>
        </div>
        <input
          className={`${open ? "" : "hide"} inputBox`}
          placeholder="Search for Places"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch(query);
            }
          }}
        ></input>
        <button
          onClick={() => {
            setOpen(!open);
            handleSearch(query);
            setQuery("");
          }}
          className={`${open ? "" : "hide"} seacrchBtn`}
        >
          Search
        </button>
      </div>
    </div>
  );
}
