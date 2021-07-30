'use strict'
AOS.init();
/*Barra de navegación*/

var ubicacion_principal = window.pageYOffset;

document.addEventListener('scroll', () =>
{

    let nav = document.getElementsByTagName('nav')[0];

    let deplazamiento = window.pageYOffset;

    if(deplazamiento <= ubicacion_principal)
    {
        nav.style.top = "0px";
    }
    else
    {
        nav.style.top = "-100px";
    }

    ubicacion_principal = deplazamiento;

})

/*Menú*/

var enlacesHeader = document.querySelectorAll(".enlaces-header")[0];

var hamburger_menu = document.querySelectorAll(".fa-bars")[0];

var semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener('click', ()=>
{
    if(semaforo)
    {
        hamburger_menu.classList.remove("fa-bars");
        hamburger_menu.classList.toggle("fa-times");
        hamburger_menu.style.color = "#fff";
        document.body.style.overflowY = 'hidden';
        semaforo = false;
    }
    else
    {
        hamburger_menu.classList.remove("fa-times");
        hamburger_menu.classList.toggle("fa-bars");
        hamburger_menu.style.color = "#000";
        document.body.style.overflow = "scroll";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos");
});