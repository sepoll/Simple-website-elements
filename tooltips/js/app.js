document.addEventListener("DOMContentLoaded", function(){
  console.log("Dziala");
// <span class="tooltipText">of the printing</span>
  var tooltipList = document.querySelectorAll(".tooltip");
  for (var i=0; i<tooltipList.length; i++){
    tooltipList[i].addEventListener("mouseover", function(event){ //czy tu mogłby być this
      var tooltipText = this.dataset.text; //dataset odnosi się do teksu zapisanego w html data-text
      var newElement = document.createElement("SPAN"); //zmienna tworząca span
      newElement.classList.add("tooltipText"); // dodanie klasy do zmiennej
      newElement.innerHTML = tooltipText; // dodanie tekstu do <spanu>...</span> z dataset zmiennej tooltipText
      this.appendChild(newElement); // tutaj jest urzyty this
    });

    tooltipList[i].addEventListener("mouseout", function(event){
      var elementToRemove = this.querySelector(".tooltipText");
      this.removeChild(elementToRemove);
    });
  }
});
