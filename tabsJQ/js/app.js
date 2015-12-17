$(document).ready(function(){
  var tabs = $(".tabs li");
  var divs = $(".tabs div");
  var currentVisibleElement = -1;

  tabs.each(function(index, element){
    $(element).on("click", function(event){
      if (currentVisibleElement !== -1 &&
      currentVisibleElement !== index){
        divs.eq(currentVisibleElement).hide();
      }
      currentVisibleElement = index;
      divs.eq(currentVisibleElement).show();
    });
  });
});
