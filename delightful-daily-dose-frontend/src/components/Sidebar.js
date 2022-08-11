import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Link } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

export default function Sidebar() {
    const darkMode = useDarkMode(false, {
        classNameDark: "dark",
    });

    React.useEffect(() => {
        var overlay = document.querySelector('.overlay');
        var trigger = document.querySelector('.hamburger');
        var isClosed = false;
        var offCanvas = document.querySelector('[data-toggle="offcanvas"]');
        var wrapper = document.querySelector('#wrapper');
        trigger.addEventListener('click', () => {
            if (isClosed === true) {
                overlay.classList.add('overlayOpacity')
                trigger.classList.remove('is-open');
                trigger.classList.add('is-closed');
                isClosed = false;
            } else {
                overlay.classList.remove('overlayOpacity')
                trigger.classList.remove('is-closed');
                trigger.classList.add('is-open');
                isClosed = true;
            }
        });
        offCanvas.addEventListener('click', () => {
            wrapper.classList.toggle('toggled');
        })
        overlay.addEventListener('click', () => {
            if (isClosed === true) {
                overlay.classList.add('overlayOpacity')
                trigger.classList.remove('is-open');
                trigger.classList.add('is-closed');
                isClosed = false;
                wrapper.classList.toggle('toggled');
            } else {
                overlay.classList.remove('overlayOpacity')
                trigger.classList.remove('is-closed');
                trigger.classList.add('is-open');
                isClosed = true;
                wrapper.classList.toggle('toggled');
            }
        })
    }, [])

    return (
        <div id="wrapper">
            <div className="overlay overlayOpacity"></div>
            <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                <ul className="nav sidebar-nav">
                    <div className="sidebar-header">
                        <div className="sidebar-brand">
                            <span id="color-scheme" onClick={darkMode.toggle}>{localStorage.getItem("darkMode") === "true" ? "Light Mode" : "Dark Mode"}</span>
                        </div>
                    </div>
                    <li><Link to="/"><span><i id="fresh" className="fa fa-solid fa-fire"></i> Hot</span></Link></li>
                    <li><Link to="/most_viewed"><span><i id="most-viewed" className="fa fa-solid fa-arrow-trend-up"></i> Most Viewed</span></Link></li>
                    <li><Link to="/history"><span><i id="history" className="fa fa-solid fa-hourglass"></i> History</span></Link></li>
                    <li><Link to="/stories"><span><i className="fa-solid fa-feather-pointed"></i> Stories</span></Link></li>
                    <li><Dropdown>
                        <DropdownToggle as="span">
                            <i id="category" className="fa fa-solid fa-grip-vertical"></i> Categories
                        </DropdownToggle>
                        <ul className="animated fadeInLeft"><DropdownMenu>
                            <li className="menu-list-item"><Link to="/domestic"><span id='domestic'><i className="fa fa-solid fa-flag"></i> Domestic</span></Link></li>
                            <li className="menu-list-item"><Link to="/foreign"><span id='foreign'><i className="fa fa-solid fa-globe"></i> Foreign</span></Link></li>
                            <li className="menu-list-item"><Link to="/sport"><span id='sport'><i className="fa fa-solid fa-baseball"></i> Sport</span></Link></li>
                            <li className="menu-list-item"><Link to="/culinary"><span id='culinary'><i className="fa fa-solid fa-utensils"></i> Culinary</span></Link></li>
                            <li className="menu-list-item"><Link to="/health"><span id='health'><i className="fa fa-solid fa-heart"></i> Health</span></Link></li>
                            <li className="menu-list-item"><Link to="/politics"><span id='politics'><i className="fa fa-solid fa-landmark"></i> Politics</span></Link></li>
                            <li className="menu-list-item"><Link to="/entertainment"><span id='entertainment'><i className="fa fa-solid fa-smile"></i> Entertainment</span></Link></li>
                            <li className="menu-list-item"><Link to="/environment"><span id='environment'><i className="fa fa-solid fa-tree"></i> Environment</span></Link></li>
                            <li className="menu-list-item"><Link to="/techworld"><span id='techworld'><i className="fa fa-solid fa-microchip"></i> TechWorld</span></Link></li>
                            <li className="menu-list-item"><Link to="/business"><span id='business'><i className="fa fa-solid fa-briefcase"></i> Business</span></Link></li>
                        </DropdownMenu>
                        </ul>
                    </Dropdown></li>
                    <li><Link to="/box_office_top_10"><span><i className="fa-solid fa-film"></i> Box Office Top 10 US</span></Link></li>
                    <li><Link to="/coming_soon"><span><i className="fa-solid fa-film"></i> Coming Soon</span></Link></li>
                    <li><Link to="/imdb_top_250_tv_shows"><span><i className="fa-solid fa-tv"></i> <i style={{ color: "yellow", fontSize: "20px" }} className="fa-brands fa-imdb"></i> Top 250 TV</span></Link></li>
                    <li><Link to="/youtube_top_25"><span><i className="fa-brands fa-youtube"></i> <i style={{ color: "red" }} className="fa-solid fa-fire"></i> YouTube </span></Link></li>
                    <li><Link to="/users"><span><i className="fa-solid fa-person"></i> Users </span></Link></li>
                    <li><a href="https://twitter.com/delightfuldd1" target="_blank" rel="noreferrer"><span><i className="fa fa-brands fa-twitter"></i> Follow us</span></a></li>
                </ul>
            </nav>
            <div id="page-content-wrapper"></div>
        </div>
    )
}
