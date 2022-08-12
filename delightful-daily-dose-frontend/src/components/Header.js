import { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from "./HeaderElements/NavbarComponent"
import Photo from "./HeaderElements/Photo"

export default function Header() {
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
                    weatherIcon.src = `https://openweathermap.org/img/wn/04d.png`;
                // clear sky
                if (data["weather"][0]["icon"] === "01d")
                    weatherIcon.src = `https://openweathermap.org/img/wn/01d.png`;
                // few clouds
                if (data["weather"][0]["icon"] === "02d")
                    weatherIcon.src = `https://openweathermap.org/img/wn/02d.png`;
                // scattered clouds
                if (data["weather"][0]["icon"] === "03d")
                    weatherIcon.src = `https://openweathermap.org/img/wn/03d.png`;
                // shower rain
                if (data["weather"][0]["icon"] === "09d")
                    weatherIcon.src = `https://openweathermap.org/img/wn/09d.png`;
                // rain
                if (data["weather"][0]["icon"] === "10d")
                    weatherIcon.src = `https://openweathermap.org/img/wn/10d.png`;
                // thunderstorm
                if (data["weather"][0]["icon"] === "11d")
                    weatherIcon.src = `https://openweathermap.org/img/wn/11d.png`;
                // snow
                if (data["weather"][0]["icon"] === "13d")
                    weatherIcon.src = `https://openweathermap.org/img/wn/13d.png`;
                // mist
                if (data["weather"][0]["icon"] === "50d")
                    weatherIcon.src = `https://openweathermap.org/img/wn/50d.png`;
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

    useEffect(() => {
        loadNameDay();
        loadWeather();
        loadExchangeRate("EUR");
        loadExchangeRate("USD");
        loadDogPhoto();
        loadNaturePhoto();
    }, [localStorage.getItem("darkMode")]);

    return (
        <header>
            <Photo divid="naturediv" title="A soul calmer" imgid="nature-photo" />
            <Photo divid="dogdiv" title="A true friend" imgid="photo" />
            <Navbar className="topbar">
                <NavbarComponent elements="top" />
            </Navbar>
            <Navbar className="lowerbar">
                <NavbarComponent elements="lower" />
            </Navbar>
        </header >
    )
}   