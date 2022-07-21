"use strict";

//livingRoom function allows the screen to change its image to the beginning of the house
/**TODO: MAKE A NEW ROOM OF THE HOUSE APPEAR AND HAVE THE DIALOG AND BUTTONS APPEAR IN SAID ROOMS*/
function livingRoom(){
    document.body.style.backgroundImage = "url('/img/delapitadeHome.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.getElementById("livingRoomTalk").style.visibility = "visible";
    document.getElementById("search").style.visibility = "visible";
    document.getElementById("move").style.visibility = "visible";
    document.getElementById("save").style.visibility = "visible";
    // document.getElementById("moveToLibrary").style.visibility = "visible";
    // document.getElementById("moveToDinningRoom").style.visibility = "visible";
}

/**ROOMS IN THE HOUSE(MAYBE MORE PICTURE CHANGES THAN COMPUTER IS USER TO)*/
/**TODO: MAKE THE BUTTONS OF THE OTHER  ROOMS WORK AND ALLOW THE PICTURE TO CHANGE THROUGHOUT THE HOUSE*/
//library function allows the screen to change its image to a different room
/**TODO: MAKE A NEW ROOM OF THE HOUSE APPEAR WITH THE BUTTONS AND DIALOG APPEAR FOR THE ROOM*/
function library(){
    document.body.style.backgroundImage = "url('/img/oldLibrary.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.getElementById("livingRoomTalk").style.visibility = "hidden";
    document.getElementById("libraryTalk").style.visibility = "visible";
    document.getElementById("search").style.visibility = "visible";
    document.getElementById("move").style.visibility = "visible";
    document.getElementById("save").style.visibility = "visible";
    // document.getElementById("moveToLivingRoom").style.visibility = "visible";
    // document.getElementById("moveToDinningRoom").style.visibility = "visible";
}

//library function allows the screen to change its image to a different room
/**TODO: MAKE A NEW ROOM OF THE HOUSE APPEAR WITH THE BUTTONS AND DIALOG APPEAR FOR THE ROOM*/
function diningRoom(){
    document.body.style.backgroundImage = "url('/img/DiningRoom.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.getElementById("livingRoomTalk").style.visibility = "hidden";
    document.getElementById("dinningRoomTalk").style.visibility = "visible";
    document.getElementById("libraryTalk").style.visibility = "hidden";
    document.getElementById("search").style.visibility = "visible";
    document.getElementById("move").style.visibility = "visible";
    document.getElementById("save").style.visibility = "visible";
    // document.getElementById("moveToLivingRoom").style.visibility = "visible";
    // document.getElementById("moveToLibrary").style.visibility = "visible";
}

//homePic function is allowing the user to go back to the m=home page if desired
/**TODO: MAKE IT POSSIBLE TO SHOW THE HOME PAGE IF PLAYER DOESN'T WANT TO START THE GAME*/
function homePic(){
    document.body.style.backgroundImage = "url('/img/Oldhouse.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.getElementById("livingRoomTalk").style.visibility = "hidden";
    document.getElementById("libraryTalk").style.visibility = "hidden";
    document.getElementById("save").style.visibility = "hidden";
    document.getElementById("move").style.visibility = "hidden";
    document.getElementById("search").style.visibility = "hidden";
}
/**END OF THE ROOMS IN THE HOUSE*/

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
/**FIND A WAY THAT ONLY THE SPECIFIC ITEM IS SAID TO BE PICKED UP*/
let items = ["Room Keys", "Broken Camera", "Vase full of dead Flowers", "Picture frames with photos and code on the back", "kids drawings", "lamps", "flashlight"]
function randomItem(){
    //let that each time it goes through the loop it only gets rid of one item
    for (let i = 0; i < items.length; i--) {
        let rand = items[Math.floor(Math.random() * items.length)];
    }
    return "you found " + items.random
}
