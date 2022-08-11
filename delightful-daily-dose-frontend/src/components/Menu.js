export default function Menu() {
    return (
        <div id="menudiv">
            <span className="nav-link" id="menu">Menu</span>
            <button type="button" className="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas">
                <span className="hamb-top close-button"></span>
                <span className="hamb-middle close-button"></span>
                <span className="hamb-bottom close-button"></span>
            </button>
        </div>
    )
}