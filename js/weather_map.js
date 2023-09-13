"use strict";
//Current weather for Converse, TX
const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Converse,USA&appid=${WEATHER_API_TOKEN}&units=imperial`;
console.log(CURRENT_WEATHER_URL);

$.get(CURRENT_WEATHER_URL).done((data) => {
    //date conversion

    let forecastData = data.list;
    let html = "";

    for (let i = 0; i < forecastData.length; i += 8) {

        //date conversion
        let date = new Date(forecastData[i].dt_txt);
        let year = date.getFullYear();
        let month = ((date.getMonth()+1).length !== 2 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
        let day = date.getDate();
        let newDate = `${year}-${month}-${day}`

        //weather data variables
        let highTemp = forecastData[i].main.temp_max
        let lowTemp = forecastData[i].main.temp_min
        let coverage = forecastData[i].weather[0].description
        let humidity = forecastData[i].main.humidity
        let windSpeed = forecastData[i].wind.speed
        let pressure = forecastData[i].main.pressure

        //code populates weather data into HTML
        html += `<div class="column">`;
        html += `<p id="date">${newDate}</p>`;
        html += `<div id="temp"><p>${lowTemp} / ${highTemp}</p></div>`;
        html += `<p>Desription: ${coverage}</p>`;
        html += `<p>Humidity: ${humidity}</p>`;
        html += `<p>Wind: ${windSpeed}</p>`;
        html += `<p>Pressure: ${pressure}</p>`;
        html += `</div>`;

        $("#insert-weather").html(html);
    }
})
