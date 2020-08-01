const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

const open = document.querySelector(".open");
const close = document.querySelector(".close");

burger.addEventListener("click", () => {
  menu.classList.toggle("show-nav");
  open.classList.toggle("show-nav");
  close.classList.toggle("show-nav");
});
