"use strict";

//livingRoom function allows the screen to change its image to the beginning of the house
/**TODO: MAKE A NEW ROOM OF THE HOUSE APPEAR AND HAVE THE DIALOG AND BUTTONS APPEAR IN SAID ROOMS*/
function livingRoom(){
    document.body.style.backgroundImage = "url('/img/delapitadeHome.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.getElementById("livingRoomTalk").style.visibility = "visible";
    document.getElementById("search").style.visibility = "visible";
    document.getElementById("save").style.visibility = "visible";
    document.getElementById("move").style.visibility = "visible";
}

//library function allows the screen to change its image to a different room
function library(){
    document.body.style.backgroundImage = "url('/img/oldLibrary.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.getElementById("libraryTalk").style.visibility = "visible";
    document.getElementById("search").style.visibility = "visible";
    document.getElementById("save").style.visibility = "visible";
    document.getElementById("move").style.visibility = "visible";
}

//homePic function is allowing the user to go back to the m=home page if desired
/**TODO: MAKE IT POSSIBLE TO SHOW THE HOME PAGE IF PLAYER DOESN'T WANT TO START THE GAME*/
function homePic(){
    document.body.style.backgroundImage = "url('/img/Oldhouse.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.getElementById("livingRoomTalk").style.display = "none";
    document.getElementById("libraryTalk").style.display = "none";
    document.getElementById("save").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("move").style.display = "none";
}

//startGame function allows the user to confirm if they want to start a new game or not
/**TODO: MAKE THE STARTGAMEOPTION WORK ONCE THE PERSON HAS PRESSED THE START GAME BUTTON*/
function startGame(){
    $("#start").click(function(){
        startGameOption();
    });
}

//saveGame function allows the user to save the progressed they made in the game
/**TODO: MAKE SAVEGAME WORK ONCE THE PERSON HAS PRESSED THE SAVE GAME BUTTON*/
function saveGame(){
    $("#save").click(function (){
        saveGameOption()
    })
}

//randomItems generated inside the rooms of the house
/**TODO: MAKE RANDOM ITEMS APPEAR IN ROOMS AND ONLY HAVE THEM APPEAR ONCE*/
function randomItem(){
    let items = ["Room Keys", "Broken Camera", "Vase full of dead Flowers", "Picture frames with photos and code on the back", "kids drawings", "lamps", "flashlight"]
    return "you found " + items.random
}