/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const togglerNav = document.querySelector(".fa-bars")

togglerNav.onclick = () => {
  document.querySelector(".header__nav").classList.toggle("active")
}
