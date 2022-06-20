// document.addEventListener('DOMContentLoaded', () => {
//     console.log('randy')
//     var overlay = document.querySelector('.overlay');
//     var trigger = document.querySelector('.hamburger');
//     var isClosed = false;
//     console.log(trigger)
//     var offCanvas = document.querySelector('[data-toggle="offcanvas"]');
//     var wrapper = document.querySelector('#wrapper');
//     trigger.addEventListener('click', hamburger_cross);
    

//     function hamburger_cross() {
//         console.log('bruh')
//         if (isClosed == true) {
//             overlay.hide();
//             trigger.removeClass('is-open');
//             trigger.addClass('is-closed');
//             isClosed = false;
//         } else {
//             overlay.show();
//             trigger.removeClass('is-closed');
//             trigger.addClass('is-open');
//             isClosed = true;
//         }
//     }
//     offCanvas.addEventListener('click', () => {
//         wrapper.toggleClass('toggled');
//     })
// })