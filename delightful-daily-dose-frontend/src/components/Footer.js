export default function Footer() {

    function loadJoke() {
        window.fetch(`Home/GetJoke`).then((response) => {
            response.json().then((data) => {
                console.log(data);
                let joke = document.getElementById("joke");
                joke.innerHTML = data["contents"]["jokes"]["joke"]["title"];
                joke.addEventListener("mouseover", () => {
                    joke.innerHTML = data["contents"]["jokes"]["joke"]["text"];
                });
                joke.addEventListener("mouseleave", () => {
                    joke.innerHTML = data["contents"]["jokes"]["joke"]["title"];
                });
            });
        });
    }
    loadJoke();
    return (
        <footer className="border-top footer text-muted">
            <div className="container">
                &copy; 2022 - Delightful Daily Dose - <a asp-area="" asp-controller="Home" asp-action="Credits">Credits</a>
                - Joke of the day: <span className="text-center" id="joke"></span>
            </div>
        </footer>
    )
}