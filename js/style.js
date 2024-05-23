// -------------------
// animation to change the words in home
// -------------------
var typed = new Typed(".element", {
  strings: [
    " Welcome To ^1000 ",
    " The Flight Website^1000 ",
    " I'm Very Happy^1000 ",
  ],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
});
//  --------------------
// make btn in bottom when clink scroll to top navbar
const up = document.getElementById("up");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    up.classList.remove("hidden");
  } else {
    up.classList.add("hidden");
  }
});
// Scroll to top when button is clicked
up.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// -----------------------
// code when to scroll add class active
// --------------------------
window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll(".nvscroll");
  var navbarLinks = document.querySelectorAll("#navbar .navbar-nav .nav-link ");

  sections.forEach(function (section, index) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      navbarLinks.forEach(function (navbarLink) {
        navbarLink.classList.remove("active");
      });
      navbarLinks[index].classList.add("active");
    }
  });
});
////////////////////////////////////////////////////
let copy = document.querySelector(".copy")
copy.addEventListener("click",function(){
    confirm("copy succeed")
})
/////////////////////////
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))