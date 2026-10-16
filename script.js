// --------------------------------------------------------------------------------------------------------------------------------------
//                              Typing animation
// --------------------------------------------------------------------------------------------------------------------------------------


const typingText = document.getElementById("typing-text");
const text = "Hello! I'm Piyush Dubey.";

let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;

        setTimeout(typeText, 150);
    }
}

typeText();

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

