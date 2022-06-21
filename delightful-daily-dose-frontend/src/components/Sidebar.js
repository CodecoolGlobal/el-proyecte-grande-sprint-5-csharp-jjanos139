import { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

export default class Sidebar extends Component {
    componentDidMount() {
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
    }

    render() {
        return (
            <div id="wrapper">
                <div className="overlay overlayOpacity"></div>
                <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                        <div className="sidebar-header">
                            <div className="sidebar-brand">
                                <span id="color-scheme" onClick={this.props.darkMode}>{this.props.dark === "dark" ? "Light Mode" : "Dark Mode"}</span>
                            </div>
                        </div>
                        <li><span onClick={() => this.props.changeNewsSource("/Home")}><i id="fresh" className="fa fa-solid fa-fire"></i> Hot</span></li>
                        <li><span onClick={() => this.props.changeNewsSource("/Home")}><i id="most-viewed" className="fa fa-solid fa-arrow-trend-up"></i> Most Viewed</span></li>
                        <li><Dropdown>
                            <DropdownToggle as="span">
                                <i id="category" className="fa fa-solid fa-grip-vertical"></i> Categories
                            </DropdownToggle>
                            <ul className="animated fadeInLeft"><DropdownMenu>
                                <li className="menu-list-item"><span id='domestic' onClick={() => this.props.changeNewsSource("/Home/Domestic")}><i className="fa fa-solid fa-flag"></i> Domestic</span></li>
                                <li className="menu-list-item"><span id='foreign' onClick={() => this.props.changeNewsSource("/Home/Foreign")}><i className="fa fa-solid fa-globe"></i> World</span></li>
                                <li className="menu-list-item"><span id='sport' onClick={() => this.props.changeNewsSource("/Home/Sport")}><i className="fa fa-solid fa-baseball"></i> Sport</span></li>
                                <li className="menu-list-item"><span id='culinary' onClick={() => this.props.changeNewsSource("/Home/Culinary")}><i className="fa fa-solid fa-utensils"></i> Gastronomy</span></li>
                                <li className="menu-list-item"><span id='health' onClick={() => this.props.changeNewsSource("/Home/Health")}><i className="fa fa-solid fa-heart"></i> Health</span></li>
                                <li className="menu-list-item"><span id='politics' onClick={() => this.props.changeNewsSource("/Home/Politics")}><i className="fa fa-solid fa-landmark"></i> Politics</span></li>
                                <li className="menu-list-item"><span id='entertainment' onClick={() => this.props.changeNewsSource("/Home/Entertainment")}><i className="fa fa-solid fa-smile"></i> Entertainment</span></li>
                                <li className="menu-list-item"><span id='environment' onClick={() => this.props.changeNewsSource("/Home/Environment")}><i className="fa fa-solid fa-tree"></i> Environment</span></li>
                                <li className="menu-list-item"><span id='techworld' onClick={() => this.props.changeNewsSource("/Home/Techworld")}><i className="fa fa-solid fa-microchip"></i> TechWorld</span></li>
                                <li className="menu-list-item"><span id='business' onClick={() => this.props.changeNewsSource("/Home/Business")}><i className="fa fa-solid fa-briefcase"></i> Economy</span></li>
                            </DropdownMenu>
                            </ul>
                        </Dropdown></li>
                        <li><span><i className="fa fa-brands fa-twitter"></i> Follow us</span></li>
                    </ul>
                </nav>
                <div id="page-content-wrapper"></div>
            </div>
        )
    }
}
