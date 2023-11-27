const hamburger = document.querySelector(".burger-card");
const mainNav = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});
