import React from "react";
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
import Logged from './components/User/Logged';
import Story from "./components/Mains/Story";
import NewStory from "./components/Mains/NewStory";
import Users from "./components/Mains/Users";

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
            return item.title.toLowerCase().search(value) !== -1;
        });
        setFilteredNews(result);
    }

    function switchSite() {
        switch (props.type) {
            case "movies":
                return (<Movies dark={dark} />);
            case "tv-shows":
                return (<TvShows dark={dark} />);
            case "coming-soon":
                return (<ComingSoon dark={dark} />);
            case "youtube":
                return (<YouTube dark={dark} />);
            case "credits":
                return (<Credits dark={dark} />);
            case "error":
                return (<Error dark={dark} />);
            case "login":
                return (<Login dark={dark} />);
            case "register":
                return (<Register dark={dark} />);
            case "logged":
                return (<Logged dark={dark} />);
            case "stories":
                return (<Story dark={dark} />);
            case "new-story":
                return (<NewStory dark={dark} />);
            case "users":
                return (<Users dark={dark} />);
            default:
                return (<News dark={dark} site={props.site} handleSearch={handleSearch} />);
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