//Infinity Stone Game - JavaScript File
//Link to jQuery CDN in HTML document
//
//Random score goal number
$("#number-to-guess").text(targetNumber);

//This will set the score goal between 18 thru 120
function targetNumber(min, max) {	
  min = Math.ceil(18);
  max = Math.floor(120);
  //The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min; 
}
//Calling targetNumber function
targetNumber(18, 120);

//Score counter
var winCounter = 0;

//Array allows the photos to be a value 1 thru 12
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
for (var i = 0; i < numberOptions.length; i++) {
    var imageValue = $(".image");
    imageValue.attr("data-imagevalue", numberOptions[i]);
    console.log(imageValue);
}

//Click event for ALL photos
$(".image").on("click", function() {
    var imageValue = ($(this).attr("data-imagevalue"));
    imageValue = parseInt(imageValue);
    winCounter += imageValue;
    alert("Your new score is: " + winCounter);

    if (winCounter === targetNumber) {
      $("#result").text("You win!");
      alert("You win!");
    }
    else if (winCounter >= targetNumber) {
      $("#result").text("You lose...");
      alert("You lose!!");
    }
});