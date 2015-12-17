$(document).ready(function(){

var nav = $(".nav");
var navDistanceFromTop = nav.position().top;
var placeHolder = $("<div></div>");
placeHolder.css("height", nav.outerHeight());

$(window).resize(function(){
  if (nav.hasClass("sticky")) {
    navDistanceFromTop = placeHolder.position().top;
  }else{
  navDistanceFromTop = nav.position().top;}
});

$(window).on("scroll", function(event){
  var currentDistanceFromTop = $(document).scrollTop();

  if(currentDistanceFromTop > navDistanceFromTop){
    nav.addClass("sticky");
    if(placeHolder.parent().length === 0){
      placeHolder.insertBefore(nav);
    }

  /*  if(nav.hasClass("sticky") == true){
      return false;
    }*/
  //  nav.next().append(placeHolder);
  }else{
    nav.removeClass("sticky");
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
