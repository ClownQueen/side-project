"use strict";

function startGameOption(){
    if (startGame() === true){
        alert("let's start the adventure then, shall we.")
    } else {
        alert("Than go home, because the adventure is not for you!")
        homePic()
    }
}

