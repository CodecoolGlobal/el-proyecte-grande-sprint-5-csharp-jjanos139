import { Link } from 'react-router-dom';

export default function Footer(props) {

    function loadJoke() {
        window.fetch(`Home/GetJoke`).then((response) => {
            response.json().then((data) => {
                let joke = document.getElementById("joke");
                joke.innerHTML = data["value"];
            });
        });
    }
    loadJoke();
    return (
        <footer className="border-top footer text-muted">
            <div className="container" id="joke-container">
                &copy; 2022 - Delightful Daily Dose - <Link to="/credits">Credits </Link>
                - Joke of the day: <marquee behavior="scroll" direction="left" id="joke"></marquee>
            </div>
        </footer>
    )
}