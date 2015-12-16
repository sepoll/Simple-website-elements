document.addEventListener("DOMContentLoaded", function(){
  console.log("Dziala");

  var nextButton = document.querySelector("#nextPicture");
  var prevButton = document.querySelector("#prevPicture");
  var list = document.querySelectorAll(".slider li");
  var currentImage = 0;

  console.log(nextButton);
  console.log(prevButton);

  //list[currentImage].style.display = "inline-block";
  list[currentImage].classList.add("visible");

  nextButton.addEventListener("click", function(event){
      list[currentImage].classList.remove("visible");
      currentImage++;
      if (currentImage >= list.length){
        currentImage = 0;
      }
      list[currentImage].classList.add("visible");
  });

  prevButton.addEventListener("click", function(event){
      list[currentImage].classList.remove("visible");
      currentImage--;
      if (currentImage < 0){
        currentImage = list.length - 1;
      }
      list[currentImage].classList.add("visible");
  });
});
