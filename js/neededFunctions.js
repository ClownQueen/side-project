"use strict";

//changePic function allows the screen to change its image depending on the room you are in
/**TODO: MAKE A NEW ROOM OF THE HOUSE APPEAR AND HAVE THE DIALOG AND BUTTONS APPEAR IN SAID ROOMS*/
function livingRoom(){
    document.body.style.backgroundImage = "url('/img/delapitadeHome.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.getElementById("search").style.display = "visible";
    document.getElementById("save").style.display = "visible";
    document.getElementById("move").style.display = "visible";
}

//homePic function is allowing the user to go back to the m=home page if desired
/**TODO: MAKE IT POSSIBLE TO SHOW THE HOME PAGE IF PLAYER DOESN'T WANT TO START THE GAME*/
function homePic(){
    document.body.style.backgroundImage = "url('/img/Oldhouse.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
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

//randomItems generated inside the rooms of the house
/**TODO: MAKE RANDOM ITEMS APPEAR IN ROOMS AND ONLY HAVE THEM APPEAR ONCE*/
function randomItem(){
    let items = ["Room Keys", "Broken Camera", "Vase full of dead Flowers", "Picture frames with photos and code on the back", "kids drawings", "lamps", "flashlight"]
    return "you found " + items.random
}