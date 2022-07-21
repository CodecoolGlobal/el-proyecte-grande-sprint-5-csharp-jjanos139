import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useLocation } from 'react-router-dom';

export default function Logged(props) {
    const location = useLocation();

    return (
        <>
            <Header dark={props.dark} />
            <Sidebar dark={props.dark} darkMode={props.darkMode} />
            <form style={{ textAlign: "center", top: "-150px" }}>
                <h1>Welcome back {location.state.username}</h1>
                <Link to="/" >Click to continue</Link>
            </form>
            <Footer dark={props.dark} />
        </>
    )
}