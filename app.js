// setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const sidebarMenu = document.getElementById("sidebar-menu");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  sidebarMenu.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  sidebarMenu.classList.remove("showNav");
});
