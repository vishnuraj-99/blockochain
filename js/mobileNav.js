const barElem = document.querySelector(".header__bars");
console.log(barElem);
const navbar = document.querySelector(".mobile-nav");
console.log(navbar);
const closeIcon = document.querySelector("#close_icon");

barElem.addEventListener("click", () => {
  navbar.classList.toggle("mobile-nav--show");
});
closeIcon.addEventListener("click", () => {
  navbar.classList.toggle("mobile-nav--show");
});
