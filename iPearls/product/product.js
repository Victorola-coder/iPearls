window.onscroll = function() {stickyPage()};

let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;

function stickyPage() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}