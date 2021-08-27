// Detecting button pressed
var numberOfDrumBtns = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumBtns; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var btnInnerHTML = this.innerHTML;
        play(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    });
    
}

// Detcting keypress
document.addEventListener("keypress", function(KeyboardEvent){

    play(KeyboardEvent.key);
    btnAnimation(KeyboardEvent.key);
});


function play(key) {
    switch (key) {
       case "w":
            var tom1 = new Audio('/drumkit/tom-1.mp3');
            tom1.play();               
           break;
       case "a":
            var tom2 = new Audio('/drumkit/tom-2.mp3');
            tom2.play();               
           break;
       case "s":
            var tom3 = new Audio('/drumkit/tom-3.mp3');
            tom3.play();               
           break;
       case "d":
            var tom4 = new Audio('/drumkit/tom-4.mp3');
            tom4.play();               
           break;
       case "j":
            var kickbass = new Audio('/drumkit/kick-bass.mp3');
            kickbass.play();               
           break;
       case "k":
            var snare = new Audio('/drumkit/snare.mp3');
            snare.play();               
           break;
       case "l":
            var crash = new Audio('/drumkit/crash.mp3');
            crash.play();               
           break;
   
       default: console.log(btnInnerHTML);
           break;
   }
}


function btnAnimation(currentKey){
    var activebtn = document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");
    
    setTimeout(function(){
    activebtn.classList.remove("pressed");
    }, 100);
}



