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

const flowerLetter = document.querySelector(".flower-letter");
console.log(flowerLetter);
gsap.to(flowerLetter, {
    repeat: -1,
    rotation: -360 * 9999, // A large number to ensure continuous rotation
    duration: 5,
    ease: "none", // Ensures a constant speed without easing
});
