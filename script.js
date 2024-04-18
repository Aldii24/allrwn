const menu = document.getElementById("hamburger-menu")
const navbarNav = document.querySelector(".navbar-nav")

menu.addEventListener("click", () => {
    navbarNav.classList.toggle("active")
})

document.addEventListener("click", (e) => {
    if (!navbarNav.contains(e.target) && !menu.contains(e.target)) {
        navbarNav.classList.remove("active")
    }
})