"use strict";
//Current weather for Converse, TX
const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=Converse,USA&appid=${WEATHER_API_TOKEN}&units=imperial`;
console.log(CURRENT_WEATHER_URL);

$.get(CURRENT_WEATHER_URL).done((data) => {
    //date conversion
    let date = new Date(data.dt)
    let year = date.getFullYear();
    let month = ((date.getMonth()+1).length !== 2 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
    let day = ((date.getDay).length !== 2 ? "0" + (date.getDay()) : (date.getDay()));
    let newDate = `${year}-${month}-${day}`
    console.log(newDate);

    //weather data variables
    let highTemp = data.main.temp_max
    let lowTemp = data.main.temp_min
    let coverage = data.weather[0].description
    let humidity = data.main.humidity
    let windSpeed = data.wind.speed
    let pressure = data.main.pressure

    //code populates weather data into HTML
    let html = `
    <div class="column">
    <div>${newDate}</div>
    <div>${lowTemp} / ${highTemp}</div>
    <div>Desription: ${coverage}</div>
    <div>Humidity: ${humidity}</div>
    <div>Wind: ${windSpeed}</div>
    <div>Pressure: ${pressure}</div>
    </div>
`
    $("#insert-weather").html(html);
})