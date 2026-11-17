// Loading page

const loader = document.querySelector('.barFill');
const main = document.querySelector('.main');

loader.addEventListener('animationend', () => {
    document.querySelector('#loadingPage').style.display = 'none';
    main.classList.add('show');
});

// Project cards animation

document.addEventListener("DOMContentLoaded", () => {

    const animatedSections = document.querySelectorAll(
        "#about, #skills"
    );

    const projectCards = document.querySelectorAll(".projectCard");

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.25,
        rootMargin: "0px 0px -8% 0px"
    });


    animatedSections.forEach(section => {
        observer.observe(section);
    });

    projectCards.forEach(card => {
        observer.observe(card);
    });

});

