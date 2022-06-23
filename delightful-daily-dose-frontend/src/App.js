import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import News from "./components/News";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import ComingSoon from "./components/ComingSoon";
import YouTube from "./components/YouTube";
import Credits from "./components/Credits";
import Error from "./components/Error";
import Register from "./components/Register";
import Login from "./components/Login";
import React from "react";

export default function App(props) {
    const [dark, setDark] = React.useState("");
    const [news, setNews] = React.useState([]);
    const [movies, setMovies] = React.useState([]);
    const [tvshows, setTvshows] = React.useState([]);
    const [comingSoon, setComingSoon] = React.useState([]);
    const [youtube, setYoutube] = React.useState([]);

    React.useEffect(() => {
        // TODO : make sure it loads only once
        changeNewsSource(`Home`);
    }, [])

    React.useEffect(() => {
        getTopBoxOffice();
    }, [movies])

    React.useEffect(() => {
        getTopImdbTvShows();
    }, [tvshows])

    React.useEffect(() => {
        getComingSoonToBoxOffice();
    }, [comingSoon])

    React.useEffect(() => {
        getYoutubeMostViewed();
    }, [youtube])

    function darkMode() {
        if (dark === "") {
            setDark("dark");
            document.body.classList.add('dark');
        } else {
            setDark("");
            document.body.classList.remove('dark');
        }
    }

    function changeNewsSource(source) {
        fetch(source)
            .then(response => response.json())
            .then(data => { setNews(data) });
    }

    function getTopBoxOffice() {
        fetch(`Home/GetTopBoxOffice`)
            .then(response => response.json())
            .then(data => { setMovies(data) });
    }

    function getTopImdbTvShows() {
        fetch(`Home/GetTopImdbTvShows`)
            .then(response => response.json())
            .then(data => { setTvshows(data) });
    }

    function getComingSoonToBoxOffice() {
        fetch(`Home/GetComingSoonToBoxOffice`)
            .then(response => response.json())
            .then(data => { setComingSoon(data) });
    }

    function getYoutubeMostViewed() {
        fetch(`Home/GetYoutubeMostViewed`)
            .then(response => response.json())
            .then(data => { setYoutube(data) });
    }

    return (
        <>
            <Header dark={dark} />
            <Sidebar dark={dark} darkMode={darkMode} changeNewsSource={changeNewsSource} />
            {props.type === "news" ? <News dark={dark} news={news} /> : ""}
            {props.type === "movies" ? <Movies dark={dark} movies={movies} /> : ""}
            {props.type === "tv-shows" ? <TvShows dark={dark} tvshows={tvshows} /> : ""}
            {props.type === "coming-soon" ? <ComingSoon dark={dark} comingSoon={comingSoon} /> : ""}
            {props.type === "youtube" ? <YouTube dark={dark} youtube={youtube} /> : ""}
            {props.type === "credits" ? <Credits dark={dark} /> : ""}
            {props.type === "error" ? <Error dark={dark} /> : ""}
            <Footer dark={dark} />
        </>
    )
}