import { Component } from "react"

export default class Menu extends Component {
    // componentDidMount() {
    //     console.log('randy222')

        
    //         console.log('randy')
    //         var overlay = document.querySelector('#overlay');
    //         var trigger = document.querySelector('.hamburger');
    //         console.log(trigger)
    //         var isClosed = false;
    //         var offCanvas = document.querySelector('[data-toggle="offcanvas"]');
    //         var wrapper = document.querySelector('#wrapper');
    //         trigger.addEventListener('click', hamburger_cross());

    //         function hamburger_cross() {
    //             console.log('please')
    //             if (isClosed == true) {
    //                 overlay.style.visibility = 'hidden';
    //                 trigger.classList.remove('is-open');
    //                 trigger.classList.add('is-closed');
    //                 isClosed = false;
    //             } else {
    //                 overlay.style.visibility = 'visible'
    //                 trigger.classList.remove('is-closed');
    //                 trigger.classList.add('is-open');
    //                 isClosed = true;
    //             }
    //         }
    //         offCanvas.addEventListener('click', () => {
    //             wrapper.classList.toggle('toggled');
    //         })
        
    // }
    render() {
        console.log('random2')
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

}