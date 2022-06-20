"use strict";

//changePic function allows the screen to change its image depending on the room you are in
function livingRoom(){
    let btn1 = document.createElement("searchButton");
    let btn2 = document.createElement("moveButton");
    document.body.style.backgroundImage = "url('/img/delapitadeHome.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
    document.write("You entered the abounded house and see how delapitated the living room looks, and wonder how the rest of the house will look")
    btn1.innerHTML = "Search Room"
    btn2.innerHTML = "Move to another room"
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
    for (let i = 0; i < items.length; i++) {

    }
}