/*ATIVANDO MENU MOBILE EXPANDIDO*/
let show = true

const menu = document.querySelector(".menu")
const menuMobile = menu.querySelector("#menu-mobile")

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("on", show)
    show = !show
})

/*BOTÃO INCLUIR DA PAGINA FORMULÁRIO*/
const incluir = document.getElementById("btn-incluir")

incluir.addEventListener("click", () =>{
    var node = document.createElement("div");
    node.classList.add("obj", "flex-row-center")

    var textnode = document.createTextNode("");
    node.appendChild(textnode);

    document.getElementById("infos-form").appendChild(node);
})