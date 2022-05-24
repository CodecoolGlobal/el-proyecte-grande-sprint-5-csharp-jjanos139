function loadNameDay() {
    window.fetch(`Home/GetNameDay`).then((response) => {
        response.json().then((data) => {
            let nameDay = document.getElementById("nameday");
            nameDay.innerHTML = data[Object.keys(data)[0]][0] + ", " + data[Object.keys(data)[0]][1];
        });
    });
}

function loadWeather() {
    window.fetch(`Home/GetWeather`).then((response) => {
        response.json().then((data) => {
            let weather = document.getElementById("weather");
            weather.innerHTML += data["main"]["temp"].toFixed(0) + "&#8451;";
            let weatherIcon = document.getElementById("weather-icon");
            // broken clouds
            if (data["weather"][0]["icon"] === "04d")
                weatherIcon.src = `http://openweathermap.org/img/wn/04d.png`;
            // clear sky
            if (data["weather"][0]["icon"] === "01d")
                weatherIcon.src = `http://openweathermap.org/img/wn/01d.png`;
            // few clouds
            if (data["weather"][0]["icon"] === "02d")
                weatherIcon.src = `http://openweathermap.org/img/wn/02d.png`;
            // scattered clouds
            if (data["weather"][0]["icon"] === "03d")
                weatherIcon.src = `http://openweathermap.org/img/wn/03d.png`;
            // shower rain
            if (data["weather"][0]["icon"] === "09d")
                weatherIcon.src = `http://openweathermap.org/img/wn/09d.png`;
            // rain
            if (data["weather"][0]["icon"] === "10d")
                weatherIcon.src = `http://openweathermap.org/img/wn/10d.png`;
            // thunderstorm
            if (data["weather"][0]["icon"] === "11d")
                weatherIcon.src = `http://openweathermap.org/img/wn/11d.png`;
            // snow
            if (data["weather"][0]["icon"] === "13d")
                weatherIcon.src = `http://openweathermap.org/img/wn/13d.png`;
            // mist
            if (data["weather"][0]["icon"] === "50d")
                weatherIcon.src = `http://openweathermap.org/img/wn/50d.png`;
        });
    });
}

function loadExchangeRate(from) {
    window.fetch(`Home/GetExchangeRate?from=${from}`).then((response) => {
        response.json().then((data) => {
            let exchange = document.getElementById(from);
            exchange.innerHTML = `${from} ` + data["result"].toFixed(2);
        });
    });
}

loadNameDay();
loadWeather();
loadExchangeRate("EUR");
loadExchangeRate("USD");

const menuButton = document.getElementById("menu");
menuButton.addEventListener("click", expandMenu());
const sideBar = document.getElementById("sidebar");
const collapseMenuButton = document.getElementById("collapse-menu");
collapseMenuButton.addEventListener("click", collapseMenu());

function expandMenu() {
    sideBar.innerHTML = `
    <div id="collapse-menu">X</div>
    <div id="side-menu">
        <div id="style">Sötét Mód</div>
        <ul id="main-menu">
            <p>Menü</p>
            <li id="fresh">Legfrissebb</li>
            <li id="most-viewed">Legnézettebb</li>
        </ul>
        <ul id="categories">
            <p>Kategóriák</p>
            <li id="domestic">Belföld</li>
            <li id="foreign">Külföld</li>
            <li id="sport">Sport</li>
            <li id="culinary">Gasztró</li>
            <li id="gaming">Gaming</li>
            <li id="cinema">Mozi</li>
            <li id="tv">TV</li>
            <li id="techworld">Techvilág</li>
            <li id="business">Tőzsde</li>
        </ul>
    </div>
`
}

function collapseMenu() {
    sideBar.innerHTML = "";
}
