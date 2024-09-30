// Toggle class active
const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("active");
});

// Klik di luar sidebar menghilangkan nav

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
