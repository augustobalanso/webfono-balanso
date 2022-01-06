var icon = document.querySelector("#dark-theme-button");
var form = document.querySelector(".formContainer");

icon.onclick = () => {
    // toggle Body
    document.body.classList.toggle("dark-mode")

    // toggle Nav
    var navList = document.querySelectorAll(".header__li")

    for (i = 0; i < navList.length; i++) {
        navList[i].classList.toggle("header__liDM")
    }

    // toggle Form
    document.querySelector(".formContainer").classList.toggle("formDarkMode")
    var formInputs = document.querySelectorAll(".form__input")

    for (i = 0; i < formInputs.length; i++) {
        formInputs[i].classList.toggle("form__inputDM")
    }

    // toggle form Textare
    document.querySelector(".form__textarea").classList.toggle("form__textareaDM")

    // toggle form button
    document.querySelector(".form__input--submit").classList.toggle("form__inputDM--submit")

    // toggle footer
    document.querySelector("footer").classList.toggle("footerDM")
     
    // button img change
    if (document.body.classList.contains("dark-mode")) {
        icon.src = ("../images/SVG/sun.svg")
    } else {
        icon.src = ("../images/SVG/moon.svg")
    }
}