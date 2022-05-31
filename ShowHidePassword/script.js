const password = document.getElementById("password");
const toggle = document.getElementById("toggle");
const icon = document.getElementById("icon");
function showHide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    toggle.classList.remove("hide");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    password.setAttribute("type", "password");
    toggle.classList.add("hide");
    icon.classList.add("fa-eye-slash");
  }
}
