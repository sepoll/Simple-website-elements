/**
 * Created by Jacek on 2015-12-16.
 */

$(document).ready( function(){
    var buttons = $(".changeBar");
    var allProgressBars = $(".progress-bar");

    buttons.on("click", function(event){
        var id = $(this).data("id");
        var color = $(this).data("color");
        var width = $(this).data("width");

        var myProgressBar = allProgressBars.filter("#bar" + id);
        var mySpan = myProgressBar.find("span");

        mySpan.removeClass();
        mySpan.addClass(color);
        mySpan.animate({
            width : width
        }, 1000);
    });
});