/*  <div class="fullscreen">
    <img src="http://lorempixel.com/125/125/business/9/cc">
    <button class="close">Close</button>
  </div>*/

  document.addEventListener("DOMContentLoaded", function(){
    var allpictures = document.querySelectorAll(".galery img");
    var showButton =  document.querySelector("#showButton");
    var hideButton =  document.querySelector("#hideButton");
    var tagInput = document.querySelector("#tagInput");

    hideButton.addEventListener("click", function(event){
      var tag = tagInput.value;
      tag = tag.trim();
      if (tag.length === 0){
        return;
      }
      
      console.log("I want to hide pictures" + tag);
      for(var i = 0; i < allpictures.length; i++){
        var pictureTag = allpictures[i].dataset.tag;
        if (pictureTag.indexOf(tag) !== -1){
          allpictures[i].classList.add("invisible");
        }
      }
    });

    showButton.addEventListener("click", function(event){
      var tag = tagInput.value;
      tag = tag.trim();
      if (tag.length === 0){
        return;
      }

      console.log("I want to show pictures " + tag);
      for(var i = 0; i<allpictures.length; i++){
        var pictureTag = allpictures[i].dataset.tag;
        if (pictureTag.indexOf(tag) !== -1){
          allpictures[i].classList.remove("invisible");
        }
      }
    })
 });
