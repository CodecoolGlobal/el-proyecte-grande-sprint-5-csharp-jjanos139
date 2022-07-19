import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import News from "./components/Mains/News";
import Movies from "./components/Mains/Movies";
import TvShows from "./components/Mains/TvShows";
import ComingSoon from "./components/Mains/ComingSoon";
import YouTube from "./components/Mains/YouTube";
import Credits from "./components/Credits";
import Error from "./components/Error";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import React from "react";

export default function App(props) {
    const [dark, setDark] = React.useState("");

    function darkMode() {
        if (dark === "") {
            setDark("dark");
            document.body.classList.add('dark');
        } else {
            setDark("");
            document.body.classList.remove('dark');
        }
    }

    const handleSearch = (event, news, setFilteredNews) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = news.filter((item) => {
            return item.title.toLowerCase().search(value) != -1;
        });
        setFilteredNews(result);
    }

    function switchSite() {
        if (props.type === "news") {
            return (<News dark={dark} site={props.site} handleSearch={handleSearch} />)
        }
        if (props.type === "movies") {
            return (<Movies dark={dark} />)
        }
        if (props.type === "tv-shows") {
            return (<TvShows dark={dark} />)
        }
        if (props.type === "coming-soon") {
            return (<ComingSoon dark={dark} />)
        }
        if (props.type === "youtube") {
            return (<YouTube dark={dark} />)
        }
        if (props.type === "credits") {
            return (<Credits dark={dark} />)
        }
        if (props.type === "error") {
            return (<Error dark={dark} />)
        }
        if (props.type === "login") {
            return (<Login dark={dark} />)
        }
        if (props.type === "register") {
            return (<Register dark={dark} />)
        }
    }

    return (
        <>
            <Header dark={dark} />
            <Sidebar dark={dark} darkMode={darkMode} />
            {switchSite()}
            <Footer dark={dark} />
        </>
    )
}