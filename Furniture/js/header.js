let burgermenu = document.querySelector("#burger-menu"); 
let menu = document.querySelector("#menu").cloneNode(true); 
let popup = document.querySelector("#popup")

let menuIsOpen = false; 

function renderMenu() {
    popup.appendChild(menu); 
}

function burgerMenuHandler(e) {
    if (menuIsOpen) {
        popup.removeChild(menu)
        popup.classList.remove("header__popup-open")
        menuIsOpen = false; 

    } else {
        popup.classList.toggle("header__popup-open"); 
        renderMenu(); 
        menuIsOpen = true; 
    }
}

burgermenu.addEventListener("click", burgerMenuHandler); 




