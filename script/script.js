AOS.init();
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// SIDE BAR LOGIN
const mediaQuery = window.matchMedia("(max-width: 991px)");
const sideNav = document.getElementById("sidenav");
const sideNavBG = document.getElementById("sidenav-bg");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

function openNavLogin() {
  sideNavBG.style = "width: 100%;";
  loginForm.style.display = "block";

  if (mediaQuery.matches) {
    sideNav.style.width = "100vw";
    sideNav.style.height = "100vh";
  } else {
    sideNav.style.width = "500px";
  }
}

function openNavRegister() {
  sideNavBG.style = "width: 100%;";
  registerForm.style.display = "block";

  if (mediaQuery.matches) {
    sideNav.style.width = "100vw";
    sideNav.style.height = "100vh";
  } else {
    sideNav.style.width = "500px";
  }
}

function closeNav() {
  sideNav.style.width = "0";
  sideNavBG.style = "width: 0;";
  loginForm.style.display = "none";
  registerForm.style.display = "none";
}
