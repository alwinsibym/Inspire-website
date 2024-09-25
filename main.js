document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-links");

  // Handle scroll for transparent navbar and sticky behavior
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Check if we are beyond the home section to change the navbar color to white
    const homeSection = document.getElementById("home");
    const homeSectionHeight = homeSection.offsetHeight;
    if (window.scrollY > homeSectionHeight - 50) {
      navbar.classList.add("white");
    } else {
      navbar.classList.remove("white");
    }
  });

  // Toggle mobile menu
  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
