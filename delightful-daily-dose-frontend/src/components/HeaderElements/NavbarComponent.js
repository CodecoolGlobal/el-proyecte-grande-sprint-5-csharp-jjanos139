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
            {props.elements === "top" ? <Link to="/"> <Logo /> </Link> : ""}
            {props.elements === "top" ? <WeatherAndExchange /> : ""}
            {props.elements === "lower" ? <Menu /> : ""}
            {props.elements === "lower" ? <Link to="/" id="sitename" className="navbar-brand"><img width="150" src={sitenameLogo} alt="" /></Link> : ""}
            {props.elements === "lower" && !user ?
                <div className="user-buttons">
                    <Link to="/register" className="reg-topright">Register</Link>
                    <Link to="/login" className="login-topright">Login</Link>
                </div>
                : ""}
            {/*{props.elements === "lower" && !user ? <h5 onClick={googleLogin}>Google</h5> : ""}*/}
            {props.elements === "lower" && user ?
                <div className="user-buttons">
                    <a className="reg-topright">{user}</a>
                    <Link to="/login" onClick={logout} className="login-topright">Logout</Link>
                </div>
                : ""}
        </div>
    )
}