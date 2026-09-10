/* =========================================
   NEDDLES SEWING SHOP JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* Close mobile menu when a link is clicked */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

    });

});


/* =========================================
   PRODUCT POPUP
========================================= */

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");


function showMessage(productName) {

    popupText.innerHTML =
        "You selected <strong>" +
        productName +
        "</strong>.<br><br>" +
        "Please contact Neddles Sewing Shop for availability, " +
        "pricing and more information.";

    popup.classList.add("show");

}


function closeMessage() {

    popup.classList.remove("show");

}


/* Close popup when clicking outside */

popup.addEventListener("click", function(event) {

    if (event.target === popup) {

        closeMessage();

    }

});


/* =========================================
   SCROLL REVEAL EFFECT
========================================= */

const cards = document.querySelectorAll(
    ".product-card, .material-card, .feature, .about-content"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

window.addEventListener("scroll", function() {

    const sections = document.querySelectorAll("section[id]");

    const scrollPosition = window.scrollY + 150;

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(function(link) {

                link.classList.remove("active");

            });

            const activeLink = document.querySelector(
                '#navbar a[href="#' + sectionId + '"]'
            );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});