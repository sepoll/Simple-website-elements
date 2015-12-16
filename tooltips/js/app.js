document.addEventListener("DOMContentLoaded", function(){
  console.log("Dziala");
// <span class="tooltipText">of the printing</span>
  var tooltipList = document.querySelectorAll(".tooltip");
  for (var i=0; i<tooltipList.length; i++){
    tooltipList[i].addEventListener("mouseover", function(event){
      var tooltipText = this.dataset.text; //dataset odnosi się do teksu zapisanego w html data-text
      var newElement = document.createElement("SPAN");
      newElement.classList.add("tooltipText");
      newElement.innerHTML = tooltipText;
      this.appendChild(newElement);
    });

    tooltipList[i].addEventListener("mouseout", function(event){
      var elementToRemove = this.querySelector(".tooltipText");
      this.removeChild(elementToRemove);
    });
  }
});
