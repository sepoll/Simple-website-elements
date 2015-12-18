$(document).ready(function(){

// tworzymy zmienną nav która zawiera div o klasie nav
var nav = $(".nav");
//tworzymy zmienną, którą ustawiamy na pozycję zmiennej nav od góry strony
var navDistanceFromTop = nav.position().top;
//tworzymy zmienną, która stworzy diva w miejsce nav który będzie position fixed
var placeHolder = $("<div></div>");
//ustawiamy, że stworzona zmienna placeHolder otrzyma wysokość oryginalnego nv, który będzie position fixed
placeHolder.css("height", nav.outerHeight());

//tworzymy funkcję na elemencie window resize żeby po zmianie szerokości window nav był position fixed w odpowiednim miejscu
$(window).resize(function(){
  //zakładamy, że jeśli nav ma klasę sticky to jego odległość od góry ma tą samą odległość co utworzony div w miejsce nav
  if (nav.hasClass("sticky")) {
    navDistanceFromTop = placeHolder.position().top;
  }
  // w przeciwnym razie jego pozycja od góry równa jest jego pozycji od góry
  else{
  navDistanceFromTop = nav.position().top;}
});

//funkcja na scroll window
$(window).on("scroll", function(event){
  //tworzymy zmienną, która przyjmuje wartość aktualnej pozycji dokumentu od góry strony
  var currentDistanceFromTop = $(document).scrollTop();

  //jeśli aktualna pozycja dokumentu od góry stronty jest większa niż pozycja nav od góry strony to...
  if(currentDistanceFromTop > navDistanceFromTop){
    //nav dostaje klasę sticky i jest position fixed
    nav.addClass("sticky");
    //i jeśli utworzonego placeholder rodzica jest równa zero, czyli go nie ma w drzewie to zostaje dodany przed nav
    if(placeHolder.parent().length === 0){
      placeHolder.insertBefore(nav);
    }

  /*  if(nav.hasClass("sticky") == true){
      return false;
    }*/
  //  nav.next().append(placeHolder);

  // w przeciwnym razie...
  }else{
    //nav traci klasę sticky
    nav.removeClass("sticky");
    //i jeżeli placeholder length nierówny jest zero czyli że jest w drzewie to go odpinamy z drzewa po czym otrzymuje znów 0
    if(placeHolder.parent().length !== 0){
      placeHolder.detach();
    }
  //  nav.next().remove(placeHolder);
  }
})

});
/*  var navBarTop = $(".nav").offset().top;

  $(window).on("scroll", function(){
    if($(window).scrollTop() > navBarTop){
      $(".nav").addClass("sticky");
    } else{
      $(".nav").removeClass("sticky");
    }
  });*/
