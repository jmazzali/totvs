let show = true

const menu = document.querySelector(".menu")
const menuMobile = menu.querySelector("#menu-mobile")

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("on", show)
    show = !show
})