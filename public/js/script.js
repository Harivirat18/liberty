// window.addEventListener("scroll", function () {
//     var header = this.document.querySelector("header")
//     header.classList.toggle("sticky", this.window.scrollY > 1);
// })


var burger = document.getElementById("bars");
var mobile = document.getElementById("mobile");

burger.addEventListener("click", function () {
  if (mobile.style.display === "block") {
    mobile.style.display = "none";
  } else {
    mobile.style.display = "block";
  }
});