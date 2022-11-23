var menu = document.querySelector('nav ul');
var menuIcon = document.querySelector('nav .menu-icon');
var menuIconImg = document.querySelector('nav .menu-icon img');

menuIcon.addEventListener('click',()=>{
    menu.classList.toggle('activo');
    if (menuIconImg.getAttribute("src") == 'menu.png') {
        menuIconImg.setAttribute("src","close.png");
    }else{
        menuIconImg.setAttribute("src","menu.png"); 
    }
})