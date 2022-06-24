import { Link } from "react-router-dom";
import React from "react";

export default function Footer(props) {
    const [joke, setJoke] = React.useState("");
    React.useEffect(() => function loadJoke() {
        window.fetch(`Home/GetJoke`).then((response) => {
            response.json().then((data) => {
                setJoke(data["value"]);
            });
        });
    })

    return (
        <footer className="border-top footer text-muted">
            <div className="container" id="joke-container">
                <Link to="/credits">Credits</Link> &copy; 2022 - Delightful Daily Dose -
                Chuck of the day: <marquee behavior="scroll" direction="left" id="joke">{joke}</marquee>
            </div>
        </footer>
    )
}