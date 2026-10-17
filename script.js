// --------------------------------------------------------------------------------------------------------------------------------------
//                              Carousel 
// --------------------------------------------------------------------------------------------------------------------------------------

function setupMarquees() {
    document.querySelectorAll(".carousel-track").forEach(track => {
        const original = track.querySelector(".carousel-content");

        if (!original) return;

        // Stop animation while rebuilding
        track.style.animation = "none";

        // Remove previously generated groups
        track.querySelectorAll(".carousel-content:not(:first-child)")
            .forEach(item => item.remove());

        const viewportWidth = track.parentElement.clientWidth;

        // Ensure the original content has enough width
        while (original.scrollWidth < viewportWidth) {
            original.innerHTML += original.innerHTML;
        }

        // Add an identical group
        const duplicate = original.cloneNode(true);
        duplicate.setAttribute("aria-hidden", "true");
        track.appendChild(duplicate);

        // Start animation after rebuilding
        track.style.animation = "";

        // Force browser layout recalculation
        void track.offsetWidth;
    });
}

window.addEventListener("load", setupMarquees);

let resizeTimer;

window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupMarquees, 150);
});

