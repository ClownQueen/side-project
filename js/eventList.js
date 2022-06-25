"use strict";

//saveGame function allows the person to save the game from the part they are on
/**TODO: MAKE THE SAVE OPTION AVAILABLE WHEN PLAYING THE GAME*/
function saveGame(){
    $("#save").click(function (){
        alert("Game is saved")
    })
}

//start game function allows a person to decide if the want to explore the house or not
/**TODO: MAKE THE ALERT ONLY APPEAR ONCE FOR EITHER OPTIONS*/
function startGameOption(){
    if (confirm("hello traveler I am sure you wanted to explore this abandoned home no?") === true){
        alert("let's start the adventure then, shall we.")
        livingRoom();
        document.getElementById("start").style.display = "none"
        document.getElementById("welcoming").style.display = "none"
    } else {
        alert("Than go home, because the adventure is not for you!")
        homePic()
    }
}

//search function will allow the person to look in that certain area for items
/**TODO: MAKE THE SEARCH BUTTON WORK ONCE CLICKED*/
function search (){
    $("#search").click(function (){
        alert("you search the room and find " + randomItem)
        document.getElementById("save").style.display = "none";
    })
}