document.addEventListener("DOMContentLoaded", function(){
window.onload=onloadPopup;

var closeButton = document.getElementById("closePopup");
var image = document.querySelector("div");
function onloadPopup(){
  image.classList.add("big");
};

closeButton.addEventListener("click", function(event){
  image.classList.remove("big");
 });
});
