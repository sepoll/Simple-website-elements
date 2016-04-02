/**
 * Created by Jacek on 2015-12-16.
 */

$(document).ready(function(){
    var nameInput = $("#nameInput");
    var emailInput = $("#emailInput");
    var messageInput = $("#messageInput");
    var errorDiv = $(".error");
    var contactForm = $("#contactForm");

    contactForm.on("submit", function (event){
        var name = nameInput.val();
        var email = emailInput.val();
        var message = messageInput.val();
        var errorMessage = "";

        if(name.length < 5){
            errorMessage += "Name is shorter than 5 chars. ";
            event.preventDefault();
        }

        if(email.indexOf("@") === -1 || email.indexOf(".") === -1){
            errorMessage += "Provide proper email. ";
            event.preventDefault();
        }

        if(message.length < 10){
            errorMessage += "Message have to be longer than 10 chars. ";
            event.preventDefault();
        }

        errorDiv.text(errorMessage);
    });
});