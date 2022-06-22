"use strict";

//child buttons needed to reach different js page
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let newRoom = document.createElement("p");

//changePic function allows the screen to change its image depending on the room you are in
function livingRoom(){
    document.body.style.backgroundImage = "url('/img/delapitadeHome.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    newRoom.innerHTML = "You entered the abounded house and see how dilapidated the living room looks, and wonder what stayed intact."
    btn1.innerHTML = "Search Room"
    btn2.innerHTML = "Move to another room"
    document.body.appendChild(newRoom)
    document.body.appendChild(btn1)
    document.body.appendChild(btn2)
}

//homePic function is allowing the user to go back to the m=home page if desired
function homePic(){
    document.body.style.backgroundImage = "url('/img/Oldhouse.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
}

//startGame function allows the user to confirm if they want to start a new game or not
function startGame(){
    $("#start").click(function(){
        startGameOption();
    });
}

//randomItems generated inside the rooms of the house
function randomItem(){
    let items = ["Room Keys", "Broken Camera", "Vase full of dead Flowers", "Picture frames with photos and code on the back", "kids drawings", "lamps", "flashlight"]
    return "you found " + items.random
}