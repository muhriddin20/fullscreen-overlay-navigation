const openNavBtn = document.querySelector(".open__nav");
const closeNavBtn = document.querySelector(".close__nav");
const nav = document.querySelector("nav");

openNavBtn.addEventListener("click", () => {
  nav.classList.add("show");
});

closeNavBtn.addEventListener("click", () => {
  nav.classList.remove("show");
});
