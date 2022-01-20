'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Make navbar transparent when it is on the top
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbar.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) return;

  console.log(link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});

// const menuItems = document.querySelectorAll('.navbar__menu__item');
// const sections = document.querySelectorAll('section');

// for (let i = 0; i < menuItems.length; i++) {
//   menuItems[i].addEventListener('click', () => {
//     sections[i].scrollIntoView({ behavior: 'smooth' });
//   });
// }
