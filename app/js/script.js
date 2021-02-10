const burger = document.getElementById("btnHamb");
const overlay = document.getElementById("overlay");
const mobileMenu = document.querySelector("#mobileMenu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  overlay.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  body.classList.toggle("no-scroll");
});

const toLargeScreen = window.matchMedia("(min-width: 1024px)");

function handleScreenChange(e) {
  if (e.matches) {
    burger.classList.remove("open");
    overlay.classList.remove("open");
    mobileMenu.classList.remove("open");
    body.classList.remove("no-scroll");
  }
}

toLargeScreen.addListener(handleScreenChange);

handleScreenChange(toLargeScreen);
