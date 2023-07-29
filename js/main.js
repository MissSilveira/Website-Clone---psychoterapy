function drop(){
    menu.classList.toggle('menu-drop')
}

let menu = document.getElementById('menu-nav')
let ul = document.getElementById('nav-ul')

let btnMenu = document.getElementById('menu-click')
    .addEventListener('click', drop)


