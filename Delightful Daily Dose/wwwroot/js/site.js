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
            weather.innerHTML = `Budapest <img width="25" id="weather-icon">` + data["main"]["temp"].toFixed(0) + "&#8451;";
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

function runSite() {
    loadNameDay();
    loadWeather();
    loadExchangeRate("EUR");
    loadExchangeRate("USD");
    loadDogPhoto();
    loadNaturePhoto();
    loadJoke();
    changeMode();
}

runSite();

function loadDogPhoto() {
    window.fetch(`Home/GetDog`).then((response) => {
        response.json().then((data) => {
            let photo = document.getElementById("photo");
            photo.src = data["message"];
        });
    });
}

function loadNaturePhoto() {
    window.fetch(`https://source.unsplash.com/1600x900/?nature`).then((response) => {
        let photo = document.getElementById("nature-photo");
            photo.src = response.url;
    });
}

function loadJoke() {
    window.fetch(`Home/GetJoke`).then((response) => {
        response.json().then((data) => {
            let joke = document.getElementById("joke");
            joke.innerHTML = data["contents"]["jokes"][0]["joke"]["title"];
            joke.addEventListener("mouseover", () => {
                joke.innerHTML = data["contents"]["jokes"][0]["joke"]["text"];
            });
            joke.addEventListener("mouseleave", () => {
                joke.innerHTML = data["contents"]["jokes"][0]["joke"]["title"];
            });
        });
    });
}

function changeMode() {
    const modeButton = document.getElementById("color-scheme");
    const topbar = document.getElementById("topbar");
    const lowerbar = document.getElementById("lowerbar");
    const aAndh5Tags = document.querySelectorAll("h5, a");
    const h6Tags = document.querySelectorAll("h6");
    const sitename = document.getElementById("sitename");
    const logo = document.getElementById("logo");
    const photoInner = document.getElementsByClassName("photo-light");
    const photoOuter = document.getElementsByClassName("photo-outer-div");
    const closeButtonElements = document.getElementsByClassName("close-button");
    let color = true;
    modeButton.addEventListener("click", () => {
        var tag;
        var item;
        var frame;
        var element;
        if (color) {
            modeButton.innerHTML = "Világos Mód";
            topbar.classList.remove("topbar");
            topbar.classList.add("topbar-dark");
            lowerbar.classList.remove("lowerbar");
            lowerbar.classList.add("lowerbar-dark");
            logo.firstElementChild.src = "img/Delightful Daily Dose-logo-dark.png";
            sitename.firstElementChild.src = "img/Delightful Daily Dose-name-dark.png";
            document.body.classList.add("body-dark");
            for (element of closeButtonElements) {
                element.classList.add("button-dark");
            }
            for (frame of photoInner) {
                frame.classList.add("photo-dark");
            }
            for (item of photoOuter) {
                item.classList.add("photo-outer-div-dark");
            }
            for (tag of aAndh5Tags) {
                tag.classList.add("h5-dark");
            }
            for (tag of h6Tags) {
                tag.classList.add("h6-dark");
            }
        } else {
            modeButton.innerHTML = "Sötét Mód";
            topbar.classList.remove("topbar-dark");
            topbar.classList.add("topbar");
            lowerbar.classList.remove("lowerbar-dark");
            lowerbar.classList.add("lowerbar");
            logo.firstElementChild.src = "img/Delightful Daily Dose-logo.png";
            sitename.firstElementChild.src = "img/Delightful Daily Dose-name.png";
            document.body.classList.remove("body-dark");
            for (element of closeButtonElements) {
                element.classList.remove("button-dark");
            }
            for (frame of photoInner) {
                frame.classList.remove("photo-dark");
            }
            for (item of photoOuter) {
                item.classList.remove("photo-outer-div-dark");
            }
            for (tag of aAndh5Tags) {
                tag.classList.remove("h5-dark");
            }
            for (tag of h6Tags) {
                tag.classList.remove("h6-dark");
            }
        }
        color = !color;
    });
}