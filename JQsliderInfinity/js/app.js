$(document).ready(function(){

  var ul = $(".slider ul");
  var firstUlChild = ul.children().first();
  var lastUlChild = ul.children().last();

  firstUlChild.before(lastUlChild.clone());
  lastUlChild.after(firstUlChild.clone());

  var pictures = $(".slider img");
  var imageWidth = 400;
  var nextPicture = $("#nextPicture");
  var prevPicture = $("#prevPicture");

  var currentImage = 1;
  ul.css("width", imageWidth * pictures.length + "px");
  ul.css("left", -currentImage * imageWidth + "px");



  nextPicture.on("click", function(event){
    currentImage++;

    ul.animate({
      "left" : -currentImage * imageWidth + "px"
    }, 1000, function(){
      if(currentImage>=pictures.length - 1){
          currentImage = 1;
          ul.css("left", -currentImage * imageWidth + "px");
      }
    });


  })
  prevPicture.on("click", function(event){
    currentImage--;

      ul.animate({
        "left" : -currentImage * imageWidth + "px"
      }, 1000, function(){
        if(currentImage===0){
          currentImage = pictures.length - 2;
          ul.css("left", -currentImage * imageWidth + "px");
        }
      });
  })

});
