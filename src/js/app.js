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