import DateAndName from "./DateAndName";
import Logo from "./Logo"
import sitenameLogo from "../../images/Delightful Daily Dose-name.png";
import WeatherAndExchange from "./WeatherAndExchange";
import Menu from "../Menu"
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

const cookies = new Cookies();

export default function Navbar(props) {
    let [user, setUser] = useState();

    useEffect(function () {
        setUser(cookies.get('user'));
    }, []);

    function logout() {
        fetch("/Logout", {
            method: "POST"
        }).then(() => {
            setUser(null);
            localStorage.removeItem('user');
        });
    }

    //function googleLogin() {
    //    fetch("/googleLogin",
    //        {
    //            method: 'POST',
    //        }).then(response => console.log(response));
    //}

    return (
        <div className="container">
            {props.elements === "top" ? <DateAndName /> : ""}
            {props.elements === "top" ? <Logo /> : ""}
            {props.elements === "top" ? <WeatherAndExchange /> : ""}
            {props.elements === "lower" ? <Menu /> : ""}
            {props.elements === "lower" ? <span id="sitename" className="navbar-brand"><img width="150" src={sitenameLogo} alt="" /></span> : ""}
            {props.elements === "lower" && !user ?
                <div className="user-buttons">
                    <Link to="/register" className="reg-topright">Register</Link>
                    <Link to="/login" className="login-topright">Login</Link>
                </div>
                : ""}
            {/*{props.elements === "lower" && !user ? <h5 onClick={googleLogin}>Google</h5> : ""}*/}
            {props.elements === "lower" && user ?
                <div className="user-buttons">
                    <h5 className="reg-topright">{user}</h5>
                    <Link to="/login" onClick={logout} className="login-topright">Logout</Link>
                </div>
                : ""}
        </div>
    )
}