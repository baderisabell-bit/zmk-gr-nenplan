
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("is-open");
        menuToggle.classList.toggle("is-open");

        const open = navigation.classList.contains("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            open
        );

    });


    /* Menü schließen, wenn ein Link angeklickt wird */

    const links = navigation.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("is-open");
            menuToggle.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});


/* =====================================================
   HERO SLIDER
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");

    if (slides.length === 0) {
        return;
    }

    let currentSlide = 0;

    setInterval(function () {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 5000);

});