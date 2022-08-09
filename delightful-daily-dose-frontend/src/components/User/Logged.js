import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Logged() {
    const location = useLocation();

    return (
        <>
            <Header />
            <Sidebar />
            <form style={{ textAlign: "center", top: "-150px" }}>
                <h1>{location.state.message}</h1>
                <Link to="/" >Back to Home</Link>
            </form>
            <Footer />
        </>
    )
}