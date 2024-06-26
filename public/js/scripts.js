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

function badumTss() {
    const audio = new Audio('/audio/badum-tss.mp3');
    audio.play();

    const badumTssElement = document.querySelector('.badum-tss');

    badumTssElement.classList.add('show-badum-tss');

    audio.addEventListener('ended', () => {
        badumTssElement.classList.remove('show-badum-tss');
    });
}