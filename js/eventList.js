"use strict";

//new game function allows user to decide if the want to start a new game or not
function newGame(){

}

//start game function allows a person to decide if the want to explore the house or not
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
function search (){
    $("#searchButton").click(function (){
        alert("you search the room and find " + randomItem)
        document.removeChild(btn1);
    })
}