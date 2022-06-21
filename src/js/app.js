import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
//language toggle menu
const list = document.querySelectorAll('.language-choice');
for (let language of list) {
  language.addEventListener("click", toggleMenu);
}
function toggleMenu() {

  var x = this.parentNode.querySelector(".languages");
  var x1 = this
  if (x.style.display == "none") {
    this.classList.add("active")
    x.style.display = "block";
  } else {
    this.classList.remove("active")
    x.style.display = "none";
  }
}

//modal for mobile view
var modal = document.getElementById("Modal");
var span = document.getElementsByClassName("close")[0];
var button = document.getElementById("openModal");
button.onclick = function () {
  document.querySelector('html').classList.add("modal-open");
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
  document.querySelector('html').classList.remove("modal-open");
}


//functionality for back to top button
var backToTop = document.getElementById("toTop");
backToTop.onclick = function () {
  window.scrollTo(1, 1);
}

//infinite arrow rotation animation
var rotate = document.getElementById("arrow1");
var rotate1 = document.getElementById("arrow2");
var rotate2 = document.getElementById("arrow3");
var middledot = document.getElementById("middle-dot");
document.addEventListener("DOMContentLoaded", rotateArrow);
function rotateArrow() {
  middledot.animate([
    { transform: 'rotate(360deg)' }
  ], {
    duration: 10000,
    iterations: Infinity
  }),
  rotate.animate([
    { transform: 'rotate(360deg)' },
  ], {
    duration: 10000,
    iterations: Infinity
  });
  rotate1.animate([
    { transform: 'rotate(360deg)' }
  ], {
    duration: 10000,
    iterations: Infinity
  });
  rotate2.animate([
    { transform: 'rotate(360deg)' }
  ], {
    duration: 10000,
    iterations: Infinity
  });
}



//swiper element
const swiper1 = new Swiper('.swiper1', {
  modules: [Navigation, Pagination, Scrollbar],
  freeMode: true,
  direction: 'horizontal',
  breakpoints: {
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }

  },
  scrollbar: {
    el: ".swiper-scrollbar1",
  },
});

const swiper2 = new Swiper('.swiper2', {
  modules: [Navigation, Pagination, Scrollbar],
  freeMode: true,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

setTimeout(function (){
  debugger
  var slider = document.getElementsByClassName("swiper-scrollbar-horizontal")
  var example = document.getElementsByClassName("wrapperWidth")
  slider[0].style.width = example[0].style.width

}, 400)