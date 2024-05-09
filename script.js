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


// add music from button
const playMusic = document.getElementById("play");

playMusic.addEventListener("click", () => {
    document.getElementById("music").play()
})

//send message
function sendMessage() {
    const nama = document.getElementById("name")
    const message = document.getElementById("message")

    const urlToWhatsapp = `https://wa.me/6281372648563?text=allo aldiii, namaku ${nama.value}. ${message.value}`
    window.open(urlToWhatsapp, "_blank")
}

//link to instagram
const instagram = document.getElementById("instagram")

instagram.addEventListener("click", () => {
    const urlToInstagram = "https://www.instagram.com/allrvvnn"
    window.open(urlToInstagram, "_blank")
})


//link to whatsapp
const whatsapp = document.getElementById("whatsapp")

whatsapp.addEventListener("click", () => {
    const urlToWhatsapp = "https://wa.me/6281372648563"
    window.open(urlToWhatsapp, "_blank")
})

//link to facebook
const facebook = document.getElementById("facebook")

facebook.addEventListener("click", () => {
    const urlToFacebook = "https://www.facebook.com/aldi.irawan.311493/"
    window.open(urlToFacebook, "_blank")
})
