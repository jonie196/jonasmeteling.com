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

// Read More Read Less
function expandFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More Details";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show Less";
    moreText.style.display = "inline";
  }
}
// Read More Read Less
function expandFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More Details";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show Less";
    moreText.style.display = "inline";
  }
}
