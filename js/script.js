// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function() {
    let userInput = $("#input").val()
    let computerChoice = Math.random()
        if computerChoice < 0.33 {

        } else if computerChoice > 0.67 {

        } else {
            
        }
    $("#computerChoice").append(computerChoice)
    $("#userChoice").append(userInput)

});


// DOCUMENT READY FUNCTION BELOW

