// script.js
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("is-active");
});

function redirectToPage() {
    // Replace 'your-page.html' with the actual URL you want to link to
    window.location.href = 'signup.html';
}

function redirectToPage2() {
    // Replace 'your-page.html' with the actual URL you want to link to
    window.location.href = 'login.html';
}