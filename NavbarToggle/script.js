const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("hidden");

  if (navLinks.classList.contains("hidden")) {
    menuBtn.textContent = "Show Menu";
  } else {
    menuBtn.textContent = "Hide Menu";
  }
});