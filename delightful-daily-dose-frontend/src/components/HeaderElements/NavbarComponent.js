import DateAndName from "./DateAndName";
import Logo from "./Logo"
import WeatherAndExchange from "./WeatherAndExchange";
import Menu from "../Menu"
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {useEffect, useState} from 'react';

const cookies = new Cookies();

export default function Navbar(props) {
    let [user, setUser] = useState();

    // function setUserHelper(asd) {
    //     setUser(asd);
    // }

    useEffect(function(){
        setUser(cookies.get('user'));
    }, []);

    function logout() {
        fetch("/Logout", {
            method: "POST"
        }).then(() => setUser(null));
    }
    
    // function login() {
    //     fetch("/Login", {
    //         method: "POST"
    //     }).then(() => setUser(cookies.get('user'))).then(window.location.replace("/"));
    // }

    return (
        <div className="container">
            {props.elements === "top" ? <DateAndName /> : ""}
            {props.elements === "top" ? <Logo /> : ""}
            {props.elements === "top" ? <WeatherAndExchange /> : ""}
            {props.elements === "lower" ? <Menu /> : ""}
            {props.elements === "lower" ? <span id="sitename" className="navbar-brand"><img width="150" alt="" /></span> : ""}
            {props.elements === "lower" && !user ? <Link to="/Register" className="reg-topright">Register</Link> : ""}
            {props.elements === "lower" && !user ? <Link to="/Login" className="login-topright">Login</Link> : ""}
            {props.elements === "lower" && user ? <h5 className="reg-topright">{user}</h5> : ""}
            {props.elements === "lower" && user ? <Link to="/" onClick={logout} className="login-topright">Logout</Link> : ""}
        </div>
    )
}