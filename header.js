const hamburguerButton = document.querySelector(".hamburguer-button");
const headerNav = document.querySelector(".header-nav");

hamburguerButton.addEventListener("click", function () {
  if (hamburguerButton.getAttribute("active") == "false") {
    hamburguerButton.setAttribute("active", "true");
    headerNav.classList.add("show");
  } else {
    hamburguerButton.setAttribute("active", "false");
    headerNav.classList.remove("show");
  }
});
