(function () {
    const scriptUrl = document.currentScript.src;
    const pageSound = new Audio(new URL("../assets/new-page-sound.wav", scriptUrl));
    const clickSoundUrl = new URL("../assets/computer-mouse-click.wav", scriptUrl);

    pageSound.volume = 0.7;
    pageSound.preload = "auto";

    window.addEventListener("DOMContentLoaded", function () {
        pageSound.play().catch(function () {
        });
    });

    document.addEventListener("click", function () {
        const clickSound = new Audio(clickSoundUrl);
        clickSound.volume = 0.7;
        clickSound.play().catch(function () {
        });
    }, true);
})();
