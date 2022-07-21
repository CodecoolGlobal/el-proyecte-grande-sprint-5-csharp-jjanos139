import DateAndName from "./DateAndName";
import Logo from "./Logo"
import WeatherAndExchange from "./WeatherAndExchange";
import Menu from "../Menu"
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import React from "react";

export default function Navbar(props) {
    const cookies = new Cookies();
    const [user, setUser] = React.useState(cookies.get("user"))
    function logout() {
        fetch("/Logout",
            {
                method: "POST"
            }).then(window.location.reload());
    }
    
    function googleLogin() {
        fetch("/googleLogin",
            {
                method: 'POST',
            }).then(response => console.log(response));
    }

    return (
        <div className="container">
            {props.elements === "top" ? <DateAndName /> : ""}
            {props.elements === "top" ? <Logo /> : ""}
            {props.elements === "top" ? <WeatherAndExchange /> : ""}
            {props.elements === "lower" ? <Menu /> : ""}
            {props.elements === "lower" ? <span id="sitename" className="navbar-brand"><img width="150" alt="" /></span> : ""}
            {props.elements === "lower" && typeof user === "undefined" ? <Link to="/Register" className="reg-topright">Register</Link> : ""}
            {props.elements === "lower" && typeof user === "undefined" ? <Link to="/Login" className="login-topright">Login</Link> : ""}
            {props.elements === "lower" && typeof user === "undefined" ? <h5 onClick={googleLogin}><i className="fa-brands fa-google"></i></h5> : ""}
            {props.elements === "lower" && typeof user === "string" ? <h5 className="reg-topright">{user}</h5> : ""}
            {props.elements === "lower" && typeof user === "string" ? <Link to="/" onClick={logout} className="login-topright">Logout</Link> : ""}
        </div>
    )
}