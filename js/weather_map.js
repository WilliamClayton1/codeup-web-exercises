"use strict";
//Current weather for Converse, TX
let name = `Converse,TX`

const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${name},US&appid=${WEATHER_API_TOKEN}&units=imperial`;
console.log(CURRENT_WEATHER_URL);

$.get(CURRENT_WEATHER_URL).done((data) => {
    let forecastData = data.list;
    let html = "";

    for (let i = 0; i < forecastData.length; i += 8) {

        //date conversion
        let date = new Date(forecastData[i].dt_txt);
        let year = date.getFullYear();
        let month = ((date.getMonth() + 1).length !== 2 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
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

    //location stored in variables
    // let locationName = `${data.city.name}, ${data.city.country}`
    let location = `${data.city.coord.lon},${data.city.coord.lat}`;
    let lonLat = location.split(',')
    $("#currentCity").html(`${name}`)
    $("#citySearch").attr("value", name)

    //Mapbox Map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'insert-map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: lonLat, // starting position [lng, lat]
        zoom: 2, // starting zoom
    });

    //marker will populate with a users city and state input
    geocode(location, MAPBOX_API_TOKEN).then(function (result) {
        let marker = new mapboxgl.Marker()
            .setLngLat(lonLat)
            .addTo(map)
        map.setCenter(result);
        map.setZoom(14);
    });


    //link search button to weather api
    $("#search-btn").on("click", function (input) {
        //button on click should take original input and replace with users input
        let userInput = document.querySelector('#citySearch').value;
        name = userInput.split('');
        let nameIndex = name.indexOf(" ");
        let removeSpace = name.splice(nameIndex, 0);
        name = name.join('');
        let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name},US&appid=${WEATHER_API_TOKEN}&units=imperial`;
        $.get(forecastUrl).done((data) => {

            forecastData = data.list;
            html = "";

            for (let i = 0; i < forecastData.length; i += 8) {

                //date conversion
                let date = new Date(forecastData[i].dt_txt);
                let year = date.getFullYear();
                let month = ((date.getMonth() + 1).length !== 2 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
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

            //location stored in variables
            location = `${data.city.coord.lon},${data.city.coord.lat}`;
            lonLat = location.split(',')
            $("#currentCity").html(`${name}`)
            $("#citySearch").attr("value", name)


            //marker will populate with a users city and state input
            geocode(location, MAPBOX_API_TOKEN).then(function (result) {
                let marker = new mapboxgl.Marker()
                    .setLngLat(lonLat)
                    .addTo(map)
                map.setCenter(result);
                map.setZoom(14);
            });

            //add a drag and drop
        })
    })
})
