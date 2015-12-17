$(document).ready(function(){

  var ul = $(".slider ul")
  var imageWidth = 400;
  var nextPicture = $("#nextPicture");
  var prevPicture = $("#prevPicture");
  var pictures = $(".slider img");
  var currentImage = 0;
  ul.css("width", imageWidth * pictures.length + "px");
  ul.css("left", -currentImage * imageWidth + "px");

  nextPicture.on("click", function(event){
    currentImage++;
    if(currentImage>=pictures.length){
     currentImage = pictures.length - 1;
  }else{
    ul.animate({
      "left" : -currentImage * imageWidth + "px"
    }, 1000);
  }

  })
  prevPicture.on("click", function(event){
    currentImage--;
    if (currentImage<0) {
      currentImage = 0;
    }else{
      ul.animate({
        "left" : -currentImage * imageWidth + "px"
      }, 1000);
    }

  })

});
