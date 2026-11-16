const sections = document.querySelectorAll(
    "#home, #about, #projects, #footer"
);

const navButtons = document.querySelectorAll(".navButton");

function updateActiveNav() {
    let currentSection = "home";

    const activationPoint = window.innerHeight * 0.4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= activationPoint) {
            currentSection = section.id;
        }
    });

    // Handle reaching the bottom of the page
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
        currentSection = "footer";
    }

    navButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.getAttribute("href") === `#${currentSection}`
        );
    });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);