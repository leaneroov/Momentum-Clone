const API_KEY = "99b0a3233a8217a0c5f50d2560dcb8e5";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = 
            `${data.weather[0].main} / ${data.main.temp}`;
        });
};

function onGeoError() {
    alert("Can't find you. No wather for you.");
}
https://api.openweathermap.org/data/2.5/weather?lat=35.8580224&lon=128.5849088&appid=9990d187b1ef0b10dbe2c9342eaff202

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

