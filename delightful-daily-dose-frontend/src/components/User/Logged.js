import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Logged() {
    const location = useLocation();

    return (
        <form style={{ textAlign: "center", top: "-150px" }}>
            <h1>Welcome back {location.state.username}</h1>
            <Link to="/" >Click to continue</Link>
        </form>
    )
}