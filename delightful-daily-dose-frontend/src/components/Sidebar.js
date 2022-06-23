import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
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
                            <span id="color-scheme" onClick={props.darkMode}>{props.dark === "dark" ? "Light Mode" : "Dark Mode"}</span>
                        </div>
                    </div>
                    <li><Link to="/"><span onClick={() => props.changeNewsSource("/Home")}><i id="fresh" className="fa fa-solid fa-fire"></i> Hot</span></Link></li>
                    <li><Link to="/most_viewed"><span onClick={() => props.changeNewsSource("/Home")}><i id="most-viewed" className="fa fa-solid fa-arrow-trend-up"></i> Most Viewed</span></Link></li>
                    <li><Dropdown>
                        <DropdownToggle as="span">
                            <i id="category" className="fa fa-solid fa-grip-vertical"></i> Categories
                        </DropdownToggle>
                        <ul className="animated fadeInLeft"><DropdownMenu>
                            <li className="menu-list-item"><Link to="/domestic"><span id='domestic' onClick={() => props.changeNewsSource("/Home/Domestic")}><i className="fa fa-solid fa-flag"></i> Domestic</span></Link></li>
                            <li className="menu-list-item"><Link to="/foreign"><span id='foreign' onClick={() => props.changeNewsSource("/Home/Foreign")}><i className="fa fa-solid fa-globe"></i> World</span></Link></li>
                            <li className="menu-list-item"><Link to="/sport"><span id='sport' onClick={() => props.changeNewsSource("/Home/Sport")}><i className="fa fa-solid fa-baseball"></i> Sport</span></Link></li>
                            <li className="menu-list-item"><Link to="/culinary"><span id='culinary' onClick={() => props.changeNewsSource("/Home/Culinary")}><i className="fa fa-solid fa-utensils"></i> Gastronomy</span></Link></li>
                            <li className="menu-list-item"><Link to="/health"><span id='health' onClick={() => props.changeNewsSource("/Home/Health")}><i className="fa fa-solid fa-heart"></i> Health</span></Link></li>
                            <li className="menu-list-item"><Link to="/politics"><span id='politics' onClick={() => props.changeNewsSource("/Home/Politics")}><i className="fa fa-solid fa-landmark"></i> Politics</span></Link></li>
                            <li className="menu-list-item"><Link to="/entertainment"><span id='entertainment' onClick={() => props.changeNewsSource("/Home/Entertainment")}><i className="fa fa-solid fa-smile"></i> Entertainment</span></Link></li>
                            <li className="menu-list-item"><Link to="/environment"><span id='environment' onClick={() => props.changeNewsSource("/Home/Environment")}><i className="fa fa-solid fa-tree"></i> Environment</span></Link></li>
                            <li className="menu-list-item"><Link to="/techworld"><span id='techworld' onClick={() => props.changeNewsSource("/Home/Techworld")}><i className="fa fa-solid fa-microchip"></i> TechWorld</span></Link></li>
                            <li className="menu-list-item"><Link to="/business"><span id='business' onClick={() => props.changeNewsSource("/Home/Business")}><i className="fa fa-solid fa-briefcase"></i> Economy</span></Link></li>
                        </DropdownMenu>
                        </ul>
                    </Dropdown></li>
                    <li><Link to="/box_office_top_10"><span><i className="fa-solid fa-film"></i> Box Office Top 10 US</span></Link></li>
                    <li><Link to="/coming_soon"><span><i className="fa-solid fa-film"></i> Coming Soon</span></Link></li>
                    <li><Link to="/imdb_top_100_tv_shows"><span><i className="fa-solid fa-tv"></i> <i style={{ color: "yellow", fontSize: "20px" }} className="fa-brands fa-imdb"></i> Top 100 TV</span></Link></li>
                    <li><Link to="/youtube_top_25"><span><i className="fa-brands fa-youtube"></i> <i style={{ color: "red" }} className="fa-solid fa-fire"></i> YouTube </span></Link></li>
                    <li><a href="https://twitter.com/delightfuldd1" target="_blank" rel="noreferrer"><span><i className="fa fa-brands fa-twitter"></i> Follow us</span></a></li>
                </ul>
            </nav>
            <div id="page-content-wrapper"></div>
        </div>
    )
}
