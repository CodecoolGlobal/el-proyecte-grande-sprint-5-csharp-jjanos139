import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Registered() {
    const location = useLocation();

    return (
        <form style={{ textAlign: "center", top: "-150px" }}>
            <h1>Welcome to DDD {location.state.username}!</h1>
            <Link to="/login" >Click to login</Link><br></br>
            <Link to="/" >Back to main</Link>
        </form>
    )
}