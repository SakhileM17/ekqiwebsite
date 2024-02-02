/* -------------------------------------------------------------
Website Name    : EKQiEnterprise Website 
Author          : Sakhile Mkhalele
Date            : Feb 2024
--------------------------------------------------------------*/
// script.js

document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("introduction");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("header-white");
            header.classList.remove("header-transparent");
        } else {
            header.classList.remove("header-white");
            header.classList.add("header-transparent");
        }
    });
});

// scroll
document.addEventListener("DOMContentLoaded", function() {
      var header = document.getElementById("fadeHeader");

      function fadeInOnScroll() {
        var scrollPosition = window.scrollY;
        var headerPosition = header.offsetTop;

        if (scrollPosition > headerPosition - window.innerHeight / 2) {
          header.classList.add("fade-in");
          window.removeEventListener("scroll", fadeInOnScroll);
        }
      }

      window.addEventListener("scroll", fadeInOnScroll);
    });

// script.js

function toggleMenu() {

    const menuLinks = document.querySelector('.menu-links');
    const closeIcon = document.querySelector('.close-icon');

    menuLinks.classList.toggle('show');
}

/*
To show the current page in the nav bar
*/
const currentPage = "home";

// remkve active class from all the links
document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
});

// add active class to the corresponding link
document.getElementById(currentPage).classList.add('active');

/*------------------------------------- 
                Slide show 
-----------------------------------------*/
let currentIndex = 0;
const slides = document.querySelector('.intro_image');
const totalSlides = document.querySelectorAll('.intro_image img').length;

function showSlide(index) {
    const slideWidth = document.querySelector('.unbrandedClubIpad').clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// You can add event listeners or use a setInterval to control the slideshow
// Example with setInterval:
setInterval(nextSlide, 5000); // Change slide every 3 seconds

//

var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
  }

  function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

