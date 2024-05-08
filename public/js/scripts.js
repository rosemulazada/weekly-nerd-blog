// Script link check
console.log("Hello, world!");

// Loader animation
const loaderContainer = document.querySelector(".loader");
const loaderItems = document.querySelectorAll(".loader-item");
const test = document.querySelector(".test");
const a = document.querySelectorAll("nav ul:first-of-type li p a");
console.log(a);

a.forEach((aa) => {
    aa.addEventListener("click", (e) => {
        e.preventDefault();

        if (loaderContainer) {
            gsap.set(loaderContainer, { display: "flex" });
            const tl = gsap.timeline();

            tl.to(loaderItems, {
                height: "100%",
                duration: 0.45,
                stagger: 0.22,
                onComplete: () => {
                    window.location.href = aa.href;
                },
            });
        }
    });
});

window.addEventListener("load", () => {
    if (test) {
        console.log(test)
        gsap.set(loaderContainer, { display: "flex" });
        gsap.set(loaderItems, { height: "100%" });

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
