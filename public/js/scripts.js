// Script link check
console.log("Hello, world!");

// // Loader animation
// const loaderContainer = document.querySelector(".loader");
// const loaderItems = document.querySelectorAll(".loader-item");
// const triggerElement = document.querySelector(".test");
// const links = document.querySelectorAll("nav ul:first-of-type li p a");

// links.forEach((link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();

//         if (loaderContainer) {
//             gsap.set(loaderContainer, { display: "flex" });
//             const tl = gsap.timeline();

//             tl.to(loaderItems, {
//                 height: "100%",
//                 duration: 0.45,
//                 stagger: 0.22,
//                 onComplete: () => {
//                     window.location.href = link.href;
//                 },
//             });
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     if (triggerElement) {
//         gsap.set(loaderItems, { height: "100%" });

//         gsap.set(loaderContainer, { display: "flex" });

//         const tl = gsap.timeline();

//         tl.to(
//             loaderItems,
//             {
//                 height: "0%",
//                 duration: 0.45,
//                 stagger: 0.22,
//             },
//             "+=0.5"
//         );

//         tl.to(loaderContainer, {
//             display: "none",
//         });
//     }
// });

// const flowerLetter = document.querySelector(".flower-letter");
// console.log(flowerLetter);
// gsap.to(flowerLetter, {
//     repeat: -1,
//     rotation: -360 * 9999, // A large number to ensure continuous rotation
//     duration: 5,
//     ease: "none", // Ensures a constant speed without easing
// });



// const tl = gsap.timeline();

// let path = document.querySelector('path');

// if (path) {
//     const start = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
//     const end = 'M0, 1005S175, 995, 500,995s500,5,500,5V0H0Z';

//     const power2 = 'power2.inOut';
//     const power4 = 'power4.inOut';


//     document.addEventListener('DOMContentLoaded', () => {
//         tl.to(path, 1, {
//             attr: {
//                 d: start,
//             },
//             ease: Power2.easeIn,
//         }).to(path, .8, {
//             attr: {
//                 d: end,
//             }, 
//             ease: Power2.easeOut,
//         });
//     });
// }


document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    const menuToggle = document.querySelector(".menu-toggle");
    const menuOverlayDesktop = document.querySelector('.hidden-overlay');

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        if (menuToggle.classList.contains("active") && menuOverlayDesktop.classList.contains('hidden-overlay')) {
            console.log("Menu open");
            menuOverlayDesktop.classList.remove('hidden-overlay');
            body.style.overflow = 'hidden';
            } else {
            console.log("Menu closed");
            menuOverlayDesktop.classList.add('hidden-overlay');
            body.style.overflow = '';
        }
    });
});
