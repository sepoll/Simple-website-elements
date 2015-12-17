$(document).ready(function(){
  var headers = $(".qa h1");
  var paragraphs = $(".qa p");

  headers.on("click", function(event){
    var jqThis = $(this);
    var myPar = jqThis.next();

    paragraphs.not(myPar).slideUp();
    myPar.slideToggle();
  });
});
