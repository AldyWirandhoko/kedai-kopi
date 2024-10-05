// Toggle class active
const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

// toggle search form active
const search = document.querySelector("#search-btn");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

search.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});

// Klik di luar elemen

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
