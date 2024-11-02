const changeSpan = document.querySelectorAll("span");
const loginFrame = document.querySelector(".login");
const cadastroFrame = document.querySelector(".cadastro");
const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);

if (urlParam.get("type") == "login") {
  console.log("login");
  loginFrame.setAttribute("active", "true");
  cadastroFrame.setAttribute("active", "false");
} else {
  loginFrame.setAttribute("active", "false");
  cadastroFrame.setAttribute("active", "true");
}

changeSpan.forEach((elemento) => {
  elemento.addEventListener("click", function () {
    if (loginFrame.getAttribute("active") == "false") {
      loginFrame.setAttribute("active", "true");
      cadastroFrame.setAttribute("active", "false");
    } else {
      loginFrame.setAttribute("active", "false");
      cadastroFrame.setAttribute("active", "true");
    }
  });
});
