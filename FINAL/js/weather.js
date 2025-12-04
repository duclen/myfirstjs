const API_KEY = "72d9e95a29a84d7aaf882139250412";

function getWeather(query){
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&lang=ko`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.current.condition.text} / ${data.current.temp_c}°C`;
            city.innerText = data.location.name;
        })
        .catch((error) => {
            console.error("Weather API Error:", error);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = "Weather unavailable";
            city.innerText = "Location unknown";
        });
}

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(`${lat},${lon}`);
}

function onGeoError(){
    // 위치 권한 거부 시 서울 날씨 표시
    getWeather("Seoul");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


