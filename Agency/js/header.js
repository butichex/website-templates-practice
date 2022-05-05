function Popup(popupButtonSelector, headerMenuSelector, popupSelector) {
    let popupButton = document.querySelector(popupButtonSelector);
    let headerMenu = document.querySelector(headerMenuSelector).cloneNode(true);
    let popup = document.querySelector(popupSelector);
    popupButton.addEventListener("click", renderPopup);
    let popupButtonLines = [...popupButton.childNodes[1].childNodes].filter((node) => node.nodeName != "SPAN");


    function renderPopup(e) {
        popup.appendChild(headerMenu);
        popup.classList.toggle("--popup-active");
        popupButton.classList.toggle("--popup-button-active");
        popupButtonLines.map((node) => node.classList.toggle("--popup-button-active"));
    }

}


menuPopup = new Popup(".header__popup-button", ".header__list", ".header__popup"); 

