let siteMenu = document.getElementById('abrir-menu') 
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

siteMenu.addEventListener('click',()=>{
    menu.classList.add('menu-abrir')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('menu-abrir')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('menu-abrir')
})