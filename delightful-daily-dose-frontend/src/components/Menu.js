export default function Menu(props) {
    return (
        <div id="menudiv">
            <span className="nav-link" id="menu">Menu</span>
            <button type="button" className="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                <span className={props.dark === "dark" ? "hamb-top close-button dark" : "hamb-top close-button"}></span>
                <span className={props.dark === "dark" ? "hamb-middle close-button dark" : "hamb-middle close-button"}></span>
                <span className={props.dark === "dark" ? "hamb-bottom close-button dark" : "hamb-bottom close-button"}></span>
            </button>
        </div>
    )
}