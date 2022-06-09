import { Component, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

export default class Sidebar extends Component {
    componentDidMount() {
        var overlay = document.querySelector('.overlay');
        var trigger = document.querySelector('.hamburger');
        console.log(trigger)
        var isClosed = false;
        var offCanvas = document.querySelector('[data-toggle="offcanvas"]');
        var wrapper = document.querySelector('#wrapper');
        trigger.addEventListener('click', ()=>{
            if (isClosed == true) {
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
        function rendy(){
            console.log('randy marsh')
            }
        return (
            <div id="wrapper">
                <div className="overlay overlayOpacity"></div>
                <nav className="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul className="nav sidebar-nav">
                        <div className="sidebar-header">
                            <div className="sidebar-brand">
                                <span id="color-scheme">Sötét Mód</span>
                            </div>
                        </div>
                        <li><span><i id="fresh" className="fa fa-solid fa-fire"></i> Legfrissebb</span></li>
                        <li><span><i id="most-viewed" className="fa fa-solid fa-arrow-trend-up"></i> Legnézettebb</span></li>
                        <li><Dropdown>
                            <DropdownToggle as="span">
                            <i id="category" className="fa fa-solid fa-grip-vertical"></i> Kategóriák
                            </DropdownToggle>
                            <ul className="animated fadeInLeft"><DropdownMenu>
                                <li className="menu-list-item"><span id='domestic' onClick={rendy}><i className="fa fa-solid fa-flag"></i> Belföld</span></li>
                                <li className="menu-list-item"><span id='foreign' onClick={rendy}><i className="fa fa-solid fa-globe"></i> Külföld</span></li>
                                <li className="menu-list-item"><span id='sport' onClick={rendy}><i className="fa fa-solid fa-baseball"></i> Sport</span></li>
                                <li className="menu-list-item"><span id='culinary' onClick={rendy}><i className="fa fa-solid fa-utensils"></i> Gasztronómia</span></li>
                                <li className="menu-list-item"><span id='health' onClick={rendy}><i className="fa fa-solid fa-heart"></i> Egészség</span></li>
                                <li className="menu-list-item"><span id='politics' onClick={rendy}><i className="fa fa-solid fa-landmark"></i> Politika</span></li>
                                <li className="menu-list-item"><span id='entertainment' onClick={rendy}><i className="fa fa-solid fa-smile"></i> Szórakozás</span></li>
                                <li className="menu-list-item"><span id='environment' onClick={rendy}><i className="fa fa-solid fa-tree"></i> Környezet</span></li>
                                <li className="menu-list-item"><span id='techworld' onClick={rendy}><i className="fa fa-solid fa-microchip"></i> Techvilág</span></li>
                                <li className="menu-list-item"><span id='business' onClick={rendy}><i className="fa fa-solid fa-briefcase"></i> Gazdaság</span></li>
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
