window.addEventListener("load", iniciar);

function iniciar()
{
    var menu = document.querySelector("nav > a");
    menu.addEventListener("click", mostrarMenu);
}

function mostrarMenu(event)
{
    event.preventDefault();

    var ul = document.querySelector("nav > ul");

    ul.classList.toggle("desplegado");
}