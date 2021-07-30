var btn_menu = document.querySelector('.btn-menu');

var menu = document.querySelector('.container');

var activador = true;

btn_menu.addEventListener('click', () => 
{
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if(activador)
    {
        menu.style.left = "0";
        activador = false;
    }
    else
    {
        menu.style.left = "-100%";
        activador = true;
    }
});

//Scroll

var prevScrollPos = window.pageYOffset;

var container_menu = document.querySelector('.menu');

window.onscroll = () =>
{
    let currentScrollPos = window.pageYOffset;

    if(prevScrollPos > currentScrollPos)
    {
        container_menu.style.top = "0";
    }
    else
    {
        container_menu.style.top = "-60px";
    }

    if(currentScrollPos >= 600)
    {
        container_menu.style.borderBottom = "2px solid #ff2e63";
        document.querySelector(".go-top").style.right = "20px";
    }
    else
    {
        container_menu.style.borderBottom = "none";
        document.querySelector(".go-top").style.right = "-100%";
    }

    prevScrollPos = currentScrollPos;

}

/*Ir arriba y abajo*/

document.querySelector(".go-top").addEventListener('click', () =>
{
    /*Safari*/
    document.body.scrollTop = 0;

    /*Otros navegadores*/
    document.documentElement.scrollTop = 0;
});

document.querySelector(".down").addEventListener('click', () => 
{
    /*Safari*/
    document.body.scrollTop = 700;

    /*Otros navegadores*/
    document.documentElement.scrollTop = 700;
});
