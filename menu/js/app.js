document.addEventListener("DOMContentLoaded", function(){
  console.log("Dziala");

  var element = document.querySelectorAll(".nav>ul>li");
  for(var i=0; i<element.length; i++){
    element[i].addEventListener("mouseover", function(event){
      var subList = this.querySelector("ul");
      if(subList !== null){
      subList.style.display = "block";
    };
    });

    element[i].addEventListener("mouseout", function(event){
      var subList = this.querySelector("ul");
      if(subList !== null){
      subList.style.display = "none";
    };
    });
  }
});
