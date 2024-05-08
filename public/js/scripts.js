// Script link check
console.log("Hello, world!");

// Loader animation
const loaderContainer = document.querySelector(".loader");
const loaderItems = document.querySelectorAll(".loader-item");
const test = document.querySelector(".test");
const a = document.querySelectorAll("nav ul:first-of-type li p a");
console.log(a);

// Function to handle page navigation animation
const navigateWithLoader = (href) => {
    if (loaderContainer) {
        gsap.set(loaderContainer, { display: "flex" });
        const tl = gsap.timeline();

        tl.to(loaderItems, {
            height: "100%",
            duration: 0.45,
            stagger: 0.22,
            onComplete: () => {
                // After animation completion, navigate to the new page
                window.location.href = href;
            },
        });
    }
};

// Event listener for link clicks
a.forEach((aa) => {
    aa.addEventListener("click", (e) => {
        e.preventDefault();
        navigateWithLoader(aa.href); // Call the navigation function
    });
});

document.addEventListener("DOMContentLoaded", () => {
    if (test) {
        console.log(test);
        gsap.set(loaderItems, { height: "100%" });

        gsap.set(loaderContainer, { display: "flex" });

        const tl = gsap.timeline();

        tl.to(
            loaderItems,
            {
                height: "0%",
                duration: 0.45,
                stagger: 0.22,
            },
            "+=0.5"
        );

        tl.to(loaderContainer, {
            display: "none",
        });
    }
});
