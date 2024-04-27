const menu = document.getElementById("hamburger-menu")
const navbarNav = document.querySelector(".navbar-nav")

//when menu is clicked 
menu.addEventListener("click", () => {
    navbarNav.classList.toggle("active")
})

//close menu when click outside
document.addEventListener("click", (e) => {
    if (!navbarNav.contains(e.target) && !menu.contains(e.target)) {
        navbarNav.classList.remove("active")
    }
})

//add music
const music = document.getElementById("logo")

music.addEventListener("click", () => {
    document.getElementById("audio").play()
})

//send message
function sendMessage() {
    const nama = document.getElementById("name")
    const message = document.getElementById("message")

    const urlToWhatsapp = `https://wa.me/6281372648563?text=allo aldiii, namaku ${nama.value}. ${message.value}`
    window.open(urlToWhatsapp, "_blank")
}