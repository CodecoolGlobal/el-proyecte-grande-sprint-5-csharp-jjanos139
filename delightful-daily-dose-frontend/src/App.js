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
import Registered from "./components/User/Registered";
import Story from "./components/Mains/Story";
import NewStory from "./components/Mains/NewStory";
import Users from "./components/Mains/Users";

export default function App(props) {
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
                return (<Movies />);
            case "tv-shows":
                return (<TvShows />);
            case "coming-soon":
                return (<ComingSoon />);
            case "youtube":
                return (<YouTube />);
            case "credits":
                return (<Credits />);
            case "error":
                return (<Error />);
            case "login":
                return (<Login />);
            case "register":
                return (<Register />);
            case "registered":
                return (<Registered />);
            case "stories":
                return (<Story />);
            case "new-story":
                return (<NewStory />);
            case "users":
                return (<Users />);
            default:
                return (<News site={props.site} handleSearch={handleSearch} />);
        }
    }

    return (
        <>
            <Header />
            <Sidebar />
            {switchSite()}
            <Footer />
        </>
    )
}