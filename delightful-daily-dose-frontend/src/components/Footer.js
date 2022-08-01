import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
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
        <footer className="border-top text-muted">
            <div className="container text-center">
                <Link to="/credits">Credits</Link> &copy; 2022 - Delightful Daily Dose<Marquee speed={50} gradient={false}>{joke} </Marquee>
            </div>
        </footer>
    )
}