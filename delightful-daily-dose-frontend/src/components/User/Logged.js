import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Logged(props) {
    const location = useLocation();

    return (
        <form className={props.dark === "dark" ? "dark" : ""} style={{ textAlign: "center", top: "-150px" }}>
            <h1>Welcome back {location.state.username}</h1>
            <Link className={props.dark === "dark" ? "dark" : ""} to="/" >Click to continue</Link>
        </form>
    )
}