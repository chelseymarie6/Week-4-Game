//Infinity Stone Game - JavaScript File
//Link to jQuery CDN in HTML document

$(document).ready(function() {

var targetMin = 18;
var targetMax = 120;

var imgMin = 1;
var imgMax = 11;

var wins = 0;
var losses = 0;
var counter = 0;

var yourScore = $("#current-score");
var targetNumber = Math.floor(Math.random() * (targetMax - targetMin)) + targetMin;

  //Images 1, 2, 3, 4, 5, 6

  var img1 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
  var img2 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
  var img3 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
  var img4 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
  var img5 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
  var img6 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;


  function start() {
    var targetNumber = Math.floor(Math.random() * (targetMax - targetMin)) + targetMin;
      $("#number-to-guess").text(targetNumber);
      counter = 0;
      yourScore.text(counter);
  }

  start();

  function reset() { 
      var targetNumber = Math.floor(Math.random() * (targetMax - targetMin)) + targetMin;
      $("#number-to-guess").text(targetNumber);
      counter = 0;
      yourScore.text(counter);

      var img1 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
      var img2 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
      var img3 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
      var img4 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
      var img5 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;
      var img6 = Math.floor(Math.random() * (imgMax + imgMin)) + imgMin;

      imageOne.attr("data-imagevalue", img1);
      imageTwo.attr("data-imagevalue", img2);
      imageThree.attr("data-imagevalue", img3);
      imageFour.attr("data-imagevalue", img4);
      imageFive.attr("data-imagevalue", img5);
      imageSix.attr("data-imagevalue", img6);
  }


  function win() {
      alert("You beat Thanos!");
      wins++;
      $("#win-counter").text(wins);
  }

  function lose () {
      alert("Thanos now rules the universe...");
      losses++;
      $("#loss-counter").text(losses);
  }

  for (var i = 0; i < 6; i++) {
      var imageOne = $(".image-1");
      var imageTwo = $(".image-2");
      var imageThree = $(".image-3");
      var imageFour = $(".image-4");
      var imageFive = $(".image-5");
      var imageSix = $(".image-6");


      imageOne.attr("data-imagevalue", img1);
      imageTwo.attr("data-imagevalue", img2);
      imageThree.attr("data-imagevalue", img3);
      imageFour.attr("data-imagevalue", img4);
      imageFive.attr("data-imagevalue", img5);
      imageSix.attr("data-imagevalue", img6);
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

   $(".image-2").on("click", function() {
      var imageTwoValue = ($(this).attr("data-imagevalue"));
      imageTwoValue = parseInt(imageTwoValue);
      console.log(imageTwoValue);
      counter += imageTwoValue;
      yourScore.text(counter);

      if (counter === targetNumber) {
          win();
          reset();
      }
        else if (counter >= targetNumber) {
          lose();
          reset();
      }
  });

   $(".image-3").on("click", function() {
      var imageThreeValue = ($(this).attr("data-imagevalue"));
      imageThreeValue = parseInt(imageThreeValue);
      console.log(imageThreeValue);
      counter += imageThreeValue;
      yourScore.text(counter);

      if (counter === targetNumber) {
          win();
          reset();
      }
        else if (counter >= targetNumber) {
          lose();
          reset();
      }
  });

    $(".image-4").on("click", function() {
      var imageFourValue = ($(this).attr("data-imagevalue"));
      imageFourValue = parseInt(imageFourValue);
      console.log(imageFourValue);
      counter += imageFourValue;
      yourScore.html(counter);

      if (counter === targetNumber) {
          win();
          reset();
      }
        else if (counter >= targetNumber) {
          loser();
          reset();
      }
  });

   $(".image-5").on("click", function() {
      var imageFiveValue = ($(this).attr("data-imagevalue"));
      imageFiveValue = parseInt(imageFiveValue);
      console.log(imageFiveValue);
      counter += imageFiveValue;
      yourScore.text(counter);

      if (counter === targetNumber) {
          win();
          reset();
      }
        else if (counter >= targetNumber) {
          lose();
          reset();
      }
  });

   $(".image-6").on("click", function() {
      var imageSixValue = ($(this).attr("data-imagevalue"));
      imageSixValue = parseInt(imageSixValue);
      console.log(imageSixValue);
      counter += imageSixValue;
      yourScore.text(counter);

      if (counter === targetNumber) {
          win();
          reset();
      }
        else if (counter >= targetNumber) {
          lose();
          reset();
      }
  });

});

//Troubleshoot:
//win and lose alert don't show up when they are supposed to...
//the alerts don't correspond to the counter
//check counter updates AND how it's interacting with the targetnumber
//is it a problem with Math.Random? 
//verify counter tracking is working - seems like it is, but comparing it to 
//  targetNumber is an issue. 
