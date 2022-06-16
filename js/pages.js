"use strict";

function changePic(){
    document.body.style.backgroundImage = "url('/img/delapitadeHome.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100% 100%";

}

function startGame(){
    $("#start").click(function(){
        changePic();
        confirm("hello traveler I am sure you wanted to explore this abandoned home no?");
    });
}