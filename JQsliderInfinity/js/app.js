$(document).ready(function(){
  //zmienna ul czyli lista
  var ul = $(".slider ul");
  // dwie zmienne, które są pierwszym i ostatnim dzieckiem zmiennej ul
  var firstUlChild = ul.children().first();
  var lastUlChild = ul.children().last();

  //sprawiamy, że przed pierwszym dzieckiem ul zostaje sklonowane ostatnie dziecko
  firstUlChild.before(lastUlChild.clone());
  //sprawiamy, że za ostatnim dzieckiem ul zostaje sklonowane pierwsze dziecko ul
  lastUlChild.after(firstUlChild.clone());

  //zmienne - wszyskie obrazki, szerokość obrazku, i 2 buttony prev i next
  var pictures = $(".slider img");
  var imageWidth = 400;
  var nextPicture = $("#nextPicture");
  var prevPicture = $("#prevPicture");

  //zmienna przyjmująca, że aktualny obrazek jest 1
  var currentImage = 1;
  // stwierdzamy, że szerokość ul wynosi szerokość obrazka razy ilość obrazków
  ul.css("width", imageWidth * pictures.length + "px");
  //stwierdzamy, że pozycja left ul wynosi minus aktualny(czyli -0 do -5) obrazek razy szerokość obrazka
  ul.css("left", -currentImage * imageWidth + "px");

  //tworzymy event na buttonie z funkcją, która mówi, że...
  nextPicture.on("click", function(event){
    //za każdym razem zwiększa się pozycja obrazka o jeden
    currentImage++;
    //wtedy następuje animacja, która sprawia, że ...
    ul.animate({
      //przesuwamy obrazek w lewo o ujemną wartość pozycji obrazka razy jego szerokość
      "left" : -currentImage * imageWidth + "px"
      //przez jedną sekundę po czym pojawia się funkcja, która...
    }, 1000, function(){
      //jeżeli pozycja obrazka jest równa bądź większa od ilości obrazków minus jeden
      if(currentImage>=pictures.length - 1){
        //sprawia, że przeskakujemy na obrazek w pozycji jeden
          currentImage = 1;
          //czyli przesuwamy w lewo obrazki o ujemną wartość jeden razy 400 bo taka jest szerokość każdego
          ul.css("left", -currentImage * imageWidth + "px");
      };
    });
  });
  prevPicture.on("click", function(event){
    currentImage--;
      ul.animate({
        "left" : -currentImage * imageWidth + "px"
      }, 1000, function(){
        if(currentImage===0){
          currentImage = pictures.length - 2;
          ul.css("left", -currentImage * imageWidth + "px");
        };
      });
  });
});
