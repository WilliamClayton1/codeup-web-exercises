"use strict";
let name = `Converse, TX`
let CURRENT_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${name},US&appid=${WEATHER_API_TOKEN}&units=imperial`;

//weather icons
let sunny = "https://openweathermap.org/img/wn/01d.png";
let fewClouds = "https://openweathermap.org/img/wn/02d.png";
let scattered = "https://openweathermap.org/img/wn/03d.png";
let broken = "https://openweathermap.org/img/wn/04d.png";
let rain = "https://openweathermap.org/img/wn/09d.png";
let shower = "https://openweathermap.org/img/wn/10d.png";
let thunderstorm = "https://openweathermap.org/img/wn/11d.png";
let snow = "https://openweathermap.org/img/wn/13d.png";
let mist = "https://openweathermap.org/img/wn/50d.png";

//displays icon based on weather cloud coverage
function cloudCoverage(sky) {
    if (sky === 'clear sky') {
        return sunny
    } else if (sky === 'few clouds') {
        return fewClouds
    } else if (sky === 'scattered clouds'|| sky === 'broken clouds') {
        return scattered
    } else if (sky === 'overcast clouds') {
        return broken
    } else if (sky === 'shower rain' || sky === 'light rain') {
        return shower
    } else if (sky === 'rain' || sky === 'moderate rain') {
        return rain
    } else if (sky === 'thunderstorm') {
        return thunderstorm
    } else if (sky === 'snow') {
        return snow
    } else if (sky === 'mist') {
        return mist
    }
}

$.get(CURRENT_FORECAST_URL).done((data) => {

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
            html += `<div class="card" style="width: 18rem;">`;
            html += `<p id="date" class="card-header text-center">${newDate}</p>`;
            html += `<div id="temp" class="card-text text-center"><p><strong>${lowTemp} / ${highTemp}</strong></p><img src='${cloudCoverage(coverage)}' alt='${coverage}'></div>`;
            html += `<ul class="list-group list-group-flush">`
            html += `<li class="list-group-item">Desription: ${coverage}</li>`;
            html += `<li class="list-group-item">Humidity: ${humidity}</li>`;
            html += `<li class="list-group-item">Wind: ${windSpeed}</li>`;
            html += `<li class="list-group-item">Pressure: ${pressure}</li>`;
            html += `</ul>`
            html += `</div>`;

            $("#insert-weather").html(html);
        }
    }

    //displays city name on html
    function userLocation(cityAndState) {
        $("#currentCity").html(`${cityAndState}`)
        $(".mapboxgl-ctrl-geocoder--input").attr("value", cityAndState)
    }

    //location stored in variables
    let location = `${data.city.coord.lon},${data.city.coord.lat}`;
    let lonLat = location.split(',')
    console.log(lonLat);

    //mapbox map
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'insert-map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: lonLat, // starting position [lng, lat]
        zoom: 13, // starting zoom
    });

    let marker = new mapboxgl.Marker({ draggable: true })
    map.addControl(new mapboxgl.NavigationControl());

    //geocoder search
    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        marker: false,
        mapboxgl: mapboxgl
    })

    map.addControl(
        geocoder.on('result', function(result) {

            marker.setLngLat(result.result.center)
            marker.addTo(map)
            let lngLat = marker.getLngLat()

            //weather data based on user input
            let USER_INPUT = `https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WEATHER_API_TOKEN}&units=imperial`;
            $.get(USER_INPUT).done((data) => {
                let newData = data.list
                html = "";
                let address = `${data.city.name}, ${data.city.country}`
                $("#currentCity").html(`${address}`)
                weatherData(newData)
            })

            function dragEnd() {

                lngLat = marker.getLngLat()
                reverseGeocode(lngLat, MAPBOX_API_TOKEN).then(function(results) {
                    $('input[type=text].mapboxgl-ctrl-geocoder--input').val(results)
                })
                map.flyTo({
                    center: lngLat,
                    zoom: 13,
                    essential: true,
                })

                //weather data based on marker placement
                CURRENT_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WEATHER_API_TOKEN}&units=imperial`

                $.get(CURRENT_FORECAST_URL).done((data) => {
                    let newData = data.list
                    html = "";
                    let newName = `${data.city.name}, ${data.city.country}`
                    $("#currentCity").html(`${newName}`)
                    weatherData(newData)
                })

            }
            marker.on('dragend', dragEnd);
        }), 'top-left')

    //populates weather for current city
    marker.setLngLat(lonLat);
    marker.addTo(map);

    //second drag function
    function drag() {
        let lngLat = marker.getLngLat()
        reverseGeocode(lngLat, MAPBOX_API_TOKEN).then(function(newData) {
            $('input[type=text].mapboxgl-ctrl-geocoder--input').val(newData)
        })
        map.flyTo({
            center: lngLat,
            zoom: 13,
            essential: true,
        })

        //weather data based on marker placement
        CURRENT_FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WEATHER_API_TOKEN}&units=imperial`

        $.get(CURRENT_FORECAST_URL).done((data) => {
            let newData = data.list
            html = "";
            let newName = `${data.city.name}, ${data.city.country}`
            $("#currentCity").html(`${newName}`)
            weatherData(newData)
        })
    }
    marker.on('dragend', drag)
    weatherData(forecastData);
    userLocation(name);
})
