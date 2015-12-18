$(document).ready(function(){
  //tworzymy zmienną ul, ktora zawiera ul
  var ul = $(".slider ul")
  //tworzymy zmienną ktora zawiera wartość szerokości obrazka
  var imageWidth = 400;
  //tworzymy zmienną, ktora zawiera button next
  var nextPicture = $("#nextPicture");
  //tworzymy zmienną, ktora zawiera button prev
  var prevPicture = $("#prevPicture");
  //tworzymy zmienną ze wszystkimmi obrazkami
  var pictures = $(".slider img");
  //tworzymy zmienną, ktora przyjmuje index obrazka
  var currentImage = 0;
  //stwierdzamy, że szerokość zmiennej ul ma przyjąć 400 razy ilość obrazkow
  ul.css("width", imageWidth * pictures.length + "px");
  //stwierdzamy, że pozycja left zmiennej ul ma przyjąć wartość ujemną razy 400
  ul.css("left", -currentImage * imageWidth + "px");

  //nastawiamy na button next event click i funkcję, ktora wykonuje sie oczywiście za każdym kliknieciem
  nextPicture.on("click", function(event){
    //currentImage=currentImage + 1 - pozycja obrazka
    currentImage++;
    //jeśli aktualny obrazek jest wiekszy bądź rowny ilosci obrazkow to..
    if(currentImage>=pictures.length){
      //to przesuwamy pozycję na minus 1
     currentImage = pictures.length - 1;
     //w przeciwnym razie...
  }else{
    //wprowadzamy animacje ktora...
    ul.animate({
      //sprawia, że wprowadzamy left z ujemną pozycją zmiennej currentImage razy zmienna imageWidth
      "left" : -currentImage * imageWidth + "px"
    }, 1000);
  };
});
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
