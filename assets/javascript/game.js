//Infinity Stone Game - JavaScript File
//Link to jQuery CDN in HTML document
//
//Global Variables: scores, wins, losses
var currentScore = 0;
/*$("#current-score").html(currentScore);*/
var winCounter = 0;
/*$("#win-counter").html(winCounter);*/
var lossCounter = 0;
/*$("#loss-counter").html(lossCounter);*/
var imageValue = 0;

//Random score goal number
$("#number-to-guess").text(targetNumber);

//This will set the score goal between 18 thru 120
function targetNumber(min, max) {	
  min = Math.ceil(18);
  max = Math.floor(120);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min; 
}
//Calling the function
targetNumber(18, 120);

function numberOptions(min, max) {
/*  min = Math.ceil(1);
  max = Math.floor(12);*/
  console.log(min);
  console.log(max);
  //The maximum is exclusive and the minimum is inclusive
  for(var i = 0; i < 12; i++) {
  imageValue =  Math.floor(Math.random() * (max - min)) + min;
  console.log(imageValue); 
  }
}
//Calling targetNumber function
numberOptions(1, 12);

/*//Array allows the photos to be a value 1 thru 12
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
for (var i = 0; i < numberOptions.length; i++) {
    var imageValue = $(".image-1");
    imageValue = Math.floor(Math.random() * 12);
    imageValue.attr("data-imagevalue", numberOptions[i]);
    console.log(imageValue);
}*/

//Click event for Image
$(".image").on("click", function() {
    imageValue = ($(this).attr("data-imageValue", numberOptions());
    winCounter += imageValue;
    
    alert("Your new score is: " + winCounter);

    if (winCounter === targetNumber) {
      alert("You win!");
    }
    else if (winCounter >= targetNumber) {
      alert("You lose!!");
    }
});
