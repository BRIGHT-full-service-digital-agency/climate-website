import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

const list = document.querySelectorAll('.language-choice');
for (let language of list) {
    language.addEventListener("click", toggleMenu);
}
function toggleMenu(){

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
var modal = document.getElementById("Modal");
var span = document.getElementsByClassName("close")[0];
var button = document.getElementById("openModal");
button.onclick = function(){
    document.querySelector('html').classList.add("modal-open");
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
    document.querySelector('html').classList.remove("modal-open");
}

var backToTop = document.getElementById("toTop");
backToTop.onclick = function(){
    window.scrollTo(1, 1);
}
var rotate = document.getElementById("arrow1");
var rotate1 = document.getElementById("arrow2");
var rotate2 = document.getElementById("arrow3");

//document.addEventListener("DOMContentLoaded", rotateArrow);

//function rotateArrow(){
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
//}










const swiper = new Swiper('.swiper', {
    modules: [ Navigation, Pagination, Scrollbar ],
    freeMode: true,
    direction: 'horizontal',
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      850: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }

    },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
  });
