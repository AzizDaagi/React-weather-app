import React from "react";
import "./weather.css";

function Weather() {
  const apiKey = "8945288390951ce81c59e947cdcb9611";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const searchBox = document.querySelector(".searchBox");
  const searchBtn = document.querySelector(".searchBtn");
  const temp = document.querySelector(".temp");
  const city = document.querySelector(".city");

  async function fetchData() {
    const response = await fetch(
      apiUrl + searchBox.value + "&units=metric&appid=" + apiKey
    );
    const data = await response.json();
    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = Math.floor(data.main.temp) + " °c";
  }
  const handleSearch =() =>{
searchBtn.addEventListener("click", () => {
    fetchData();
  });
  }
  const handleEnterKey = () => {
searchBox.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    searchBtn.click();
  }
});
  }
  

  return (
    <div>
      <div className="search">
        <input
          className="searchBox"
          type="text"
          placeholder="Enter city name"
          spellcheck="false"
          onKeyUp={handleEnterKey}
        />
        <button className="searchBtn" onClick={handleSearch}>
          <img
            className="icon"
            src={
              "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
            }
          />
        </button>
      </div>
      <div className="weather">
        <img
          className="image"
          src={"https://cdn-icons-png.flaticon.com/512/3161/3161249.png"}
        />
        <h1 className="temp">22° C</h1>
        <h2 className="city">Tunis</h2>
      </div>
    </div>
  );
}

export default Weather;
