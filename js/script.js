const pizza = document.getElementsByClassName("pizza")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]

pizza.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})