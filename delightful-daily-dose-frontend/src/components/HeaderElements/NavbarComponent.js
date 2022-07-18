import DateAndName from "./DateAndName";
import Logo from "./Logo"
import WeatherAndExchange from "./WeatherAndExchange";
import Menu from "../Menu"
import { Link } from 'react-router-dom';

export default function Navbar(props) {


    return (
        <div className="container">
            {props.elements === "top" ? <DateAndName /> : ""}
            {props.elements === "top" ? <Logo /> : ""}
            {props.elements === "top" ? <WeatherAndExchange /> : ""}
            {props.elements === "lower" ? <Menu /> : ""}
            {props.elements === "lower" ? <span id="sitename" className="navbar-brand"><img width="150" alt="" /></span> : ""}
            {props.elements === "lower" ? <Link to="/Register" className="reg-topright">Register</Link> : ""}
            {props.elements === "lower" ? <Link to="/Login" className="login-topright">Login</Link> : ""}
        </div>
    )
}