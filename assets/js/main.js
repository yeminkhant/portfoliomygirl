// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');


// MENU SHOW
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// MENU HIDE
// Validate if constant exists
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  // when we click on each nav__link, we remove the show-menu class

  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click',linkAction))




// CHANGE BACKGROUND HEADER
function scrollHeader() {
  const header = document.getElementById('header');
  // when the scroll is greater than 50 viewport height, add the scroll header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


// HOME SWIPER
var homeswiper = new Swiper(".home-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
});


// SERVICES

const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('services__active');
    });

    target.classList.add('services__active');

    tabs.forEach(tab => {
      tab.classList.remove('services__active');
    });

    tab.classList.add('services__active');
  })
});