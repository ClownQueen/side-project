"use strict";

//changePic function allows the screen to change it's image depending on the room you are in
function changePic(){
    document.body.style.backgroundImage = "url('/img/delapitadeHome.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";
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
        changePic();
        confirm("hello traveler I am sure you wanted to explore this abandoned home no?");
    });
}

