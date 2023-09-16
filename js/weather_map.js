"use strict";
//Current weather for Converse, TX
let name = `Converse,TX`
let CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${name},US&appid=${WEATHER_API_TOKEN}&units=imperial`;

$.get(CURRENT_WEATHER_URL).done((data) => {
    let forecastData = data.list;
    let html = "";

    //function to gather, loop, and display data
    function weatherData(forecast) {
        for (let i = 0; i < forecast.length; i += 10) {

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
        $("#currentCity").html(`${cityAndState}`)
        // $("#citySearch").attr("value", cityAndState)
        $(".mapboxgl-ctrl-geocoder--input").attr("value", cityAndState)
    }

    //mapbox map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'insert-map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: lonLat, // starting position [lng, lat]
        zoom: 13, // starting zoom
    });

    //Geocoder search
    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        marker: false,
        mapboxgl: mapboxgl
    })

    map.addControl(
        geocoder.on('result', function(result) {
            let marker = new mapboxgl.Marker({ draggable: true, color: "pink" })
                .setLngLat(result.result.center)
                .addTo(map)
            let address = result.result.place_name
            $("#currentCity").html(`${address}`)

            function dragEnd() {
                let lngLat = marker.getLngLat()

                reverseGeocode(lngLat, MAPBOX_API_TOKEN).then(function(results) {
                    $('input[type=text].mapboxgl-ctrl-geocoder--input').val(results)
                })

                map.flyTo({
                    center: lngLat,
                    zoom: 13,
                    essential: true,
                })

                let dragUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WEATHER_API_TOKEN}&units=imperial`
                console.log(dragUrl);
                $.get(dragUrl).done((dragData) => {
                    let newData = dragData.list
                    html = "";
                    let newName = `${dragData.city.name}, ${dragData.city.country}`
                    $("#currentCity").html(`${newName}`)
                    weatherData(newData)
                })
            }
            marker.on('dragend', dragEnd);
        })
    )
    //populates weather for current city
    weatherData(forecastData);
    userLocation(name);

})
