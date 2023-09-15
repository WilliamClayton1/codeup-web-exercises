"use strict";
//Current weather for Converse, TX
let name = `Converse,TX`
let CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${name},US&appid=${WEATHER_API_TOKEN}&units=imperial`;
console.log(CURRENT_WEATHER_URL);

$.get(CURRENT_WEATHER_URL).done((data) => {

    let forecastData = data.list;
    let html = "";

    //function to gather, loop, and display data
    function weatherData(forecast) {
        for (let i = 0; i < forecast.length; i += 8) {

            //date conversion
            let date = new Date(forecast[i].dt_txt);
            let year = date.getFullYear();
            let month = ((date.getMonth() + 1).length !== 2 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1));
            let day = date.getDate();
            let newDate = `${year}-${month}-${day}`

            //weather data variables
            let highTemp = forecast[i].main.temp_max
            let lowTemp = forecast[i].main.temp_min
            let coverage = forecast[i].weather[0].description
            let humidity = forecast[i].main.humidity
            let windSpeed = forecast[i].wind.speed
            let pressure = forecast[i].main.pressure

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
    }
    //location stored in variables
    let location = `${data.city.coord.lon},${data.city.coord.lat}`;
    let lonLat = location.split(',')

    //displays city name on html
    function userLocation(cityAndState) {
        $("#currentCity").html(`${capitalizeName(cityAndState)}`)
        $("#citySearch").attr("value", cityAndState)
    }

        //mapbox map
        mapboxgl.accessToken = MAPBOX_API_TOKEN;
        const map = new mapboxgl.Map({
            container: 'insert-map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: lonLat, // starting position [lng, lat]
            zoom: 2, // starting zoom
        });

    //marker will populate with a users city and state input
    let marker = new mapboxgl.Marker({draggable: true})
    function markerLocation(newLocation, token, pin) {
        geocode(newLocation, token).then(function(result) {
            pin.setLngLat(result)
            pin.addTo(map)
            map.setCenter(result);
            map.setZoom(14);


            //drag and drop marker to see weather forecast in different areas
            function dragEnd() {
                let lngLat = pin.getLngLat();
                map.flyTo({
                    center: lngLat,
                    zoom: 14,
                    essential: true,
                })
                let dragUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WEATHER_API_TOKEN}&units=imperial`
                $.get(dragUrl).done((dragData) => {
                    let newData = dragData.list
                    console.log(dragUrl);
                    html = "";
                    let newName = `${dragData.city.name}, ${dragData.city.country}`
                    weatherData(newData)
                    $("#currentCity").html(`${newName}`)
                    $("#citySearch").attr("value", newName)
                })
            }
            pin.on('dragend', dragEnd);
        })
    }

    weatherData(forecastData);
    userLocation(name);
    markerLocation(name, MAPBOX_API_TOKEN, marker)


    //link search button to weather api
    $("#search-btn").on("click", function (input) {

        //button on click should take original input and replace with users input
        let userInput = document.querySelector('#citySearch').value;
        name = userInput.split('');
        let nameIndex = name.indexOf(" ");
        let removeSpace = name.splice(nameIndex, 0);
        name = name.join('');

        //capturing and requesting new data from user's input
        forecastData = `https://api.openweathermap.org/data/2.5/forecast?q=${name},US&appid=${WEATHER_API_TOKEN}&units=imperial`;
        console.log(forecastData);
        $.get(forecastData).done((newData) => {
            html = "";
            let update = newData.list

            //marker flies to location
            geocode(name, MAPBOX_API_TOKEN).then(function(result) {
                console.log(result);
                marker.setLngLat(result)
                marker.addTo(map)
                map.flyTo({
                    center: result,
                    essential: true,
                })
            });

            weatherData(update)
            userLocation(name)
            // code deletes white space
            // let str = 'will clayton here'
            // if (str.includes(' ')) {
            //     str = str.split('')
            //     str = str.filter((str) =>
            //         str !== ' '
            //     )
            //     console.log(str);
            // }
        })
    })
})
