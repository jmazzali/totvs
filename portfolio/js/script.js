/*ATIVANDO MENU MOBILE EXPANDIDO*/
let show = true

const menu = document.querySelector(".menu")
const menuMobile = menu.querySelector("#menu-mobile")

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("on", show)
    show = !show
})

/**/
var body = document.querySelector("body")
var sectionLevel = document.getElementById("level")
var classFont = document.getElementsByClassName("fontdefault")

var themeA = 0

function changeBC(){
    if(themeA === 0){
        body.style.backgroundColor = 'black';
        sectionLevel.style.backgroundColor = 'rgb(129 129 129 / 37%)';

        for (i = 0; i < classFont.length; i++) {
            classFont[i].style.color = "white"
        }
        themeA = 1
    } else{
        body.style.backgroundColor = 'white';
        sectionLevel.style.backgroundColor = 'rgba(223, 223, 223, 0.493)';

        for (i = 0; i < classFont.length; i++) {
            classFont[i].style.color="rgb(3, 0, 44)"
        }
        themeA = 0
    }
}


/*BOTÃO INCLUIR DA PAGINA FORMULÁRIO*/
const incluir = document.getElementById("btn-incluir")

function incluirDiv(){
    var node = document.createElement("div");
    node.classList.add("obj", "flex-row-center");

    var textnode = document.createTextNode("");
    node.appendChild(textnode);

    document.getElementById("infos-form").appendChild(node);
}