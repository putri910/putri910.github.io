const navbarNav = document.getElementById("navbar-nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
    navbarNav.classList.toggle("active");
});