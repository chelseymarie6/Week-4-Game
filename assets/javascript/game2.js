$(document).ready(function() {

var targetMin = 18;
var targetMax = 120;

var imgMin = 1;
var imgMax = 11;

var wins = 0;
var losses = 0;
var counter = 0;

var yourScore = $("#current-score");

var img1 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;

	function win () {

	}


  for (var i = 0; i < 6; i++) {
      var imageOne = $(".image-1");

      imageOne.attr("data-imagevalue", img1);
   }

   $(".image-1").on("click", function() {
      var imageOneValue = ($(this).attr("data-imagevalue"));
      imageOneValue = parseInt(imageOneValue); 
      counter += imageOneValue;
      yourScore.text(counter);
     

      if (counter === targetNumber) {
          win();
          reset();
      }
        else if (counter >= targetNumber) {
          lose();
          reset();
      }

      console.log(imageOneValue);
       console.log(counter);
        console.log(yourScore);

  	});

	function reset() {
	      var targetNumber = Math.floor(Math.random() * (targetMax - targetMin)) + targetMin;
	      $("#number-to-guess").text(targetNumber);
	      console.log(targetNumber);
	      counter = 0;
	      yourScore.text(counter);

	      var img1 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;

	      imageOne.attr("data-imagevalue", img1);
  	}


	function win() {
	      alert("You beat Thanos!");
	      wins++;
	      $(".win-counter").text(wins);
	  };

	function lose() {
	      alert("Thanos now rules the universe...");
	      losses++;
	      $(".loss-counter").text(losses);
	  };

	  	reset();
		win();
		lose();


 });
