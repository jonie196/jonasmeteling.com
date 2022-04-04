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
// setup booking
const bookingBtn = document.getElementById("booking-btn");
const booking = document.getElementById("booking");
const bookingClose = document.getElementById("booking-close");
// show nav
bookingBtn.addEventListener("click", () => {
  booking.classList.add("showBooking");
});
// close nav
bookingClose.addEventListener("click", () => {
  booking.classList.remove("showBooking");
});
