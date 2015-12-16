/*  <div class="fullscreen">
    <img src="http://lorempixel.com/125/125/business/9/cc">
    <button class="close">Close</button>
  </div>*/

  document.addEventListener("DOMContentLoaded", function(){
     var pictures = document.querySelectorAll(".galery img");
     var body = document.querySelector("body");

     for(var i = 0; i<pictures.length; i++){
       pictures[i].addEventListener("click", function(event){

        var imageSrc = this.getAttribute("src");
        var fullscreendiv = document.createElement("DIV");
        var fullscreenimg = document.createElement("IMG");
        var fullscreenbutton = document.createElement("BUTTON");

        fullscreendiv.classList.add("fullscreen");
        fullscreenbutton.classList.add("close");
        fullscreenbutton.innerHTML = "CLOSE";
        fullscreenimg.setAttribute("src", imageSrc);

        fullscreendiv.appendChild(fullscreenimg);
        fullscreendiv.appendChild(fullscreenbutton);


        fullscreenbutton.addEventListener("click", function(event){
          body.removeChild(fullscreendiv);
        });
        body.appendChild(fullscreendiv);
       });
     }
 });
