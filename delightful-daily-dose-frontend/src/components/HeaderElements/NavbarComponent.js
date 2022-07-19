import DateAndName from "./DateAndName";
import Logo from "./Logo"
import WeatherAndExchange from "./WeatherAndExchange";
import Menu from "../Menu"
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function Navbar(props) {
    const cookies = new Cookies();
    const user = cookies.get('user')
    function logout() {
        fetch("/Logout", {
            method: "POST"
        }).then(window.location.reload())
    }
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