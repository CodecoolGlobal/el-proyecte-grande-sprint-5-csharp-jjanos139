import DateAndName from "./DateAndName";
import Logo from "./Logo"
import WeatherAndExchange from "./WeatherAndExchange";
import Menu from "./Menu"
import SiteName from "../images/Delightful Daily Dose-name.png"
import SiteLogo from "../images/Delightful Daily Dose-logo.png"

export default function Navbar(props) {
    return (
        <div id="container">
            {props.elements === "top" ? <DateAndName /> : ""}
            {props.elements === "top" ? <Logo src={SiteLogo} /> : ""}
            {props.elements === "top" ? <WeatherAndExchange /> : ""}
            {props.elements === "lower" ? <Menu /> : ""}
            {props.elements === "lower" ? <span id="sitename" className="navbar-brand"><img width="150" src={SiteName} alt="" /></span> : ""}
        </div>
    )
}