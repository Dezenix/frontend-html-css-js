document.addEventListener("DOMContentLoaded", function() {

  var dice = document.querySelector("img");
  var sound = new Audio("a/roll.mp3");
  var colors = [
    "255, 87, 34",
    "76, 175, 80",
    "33, 150, 243",
    "63, 81, 181",
    "244, 143, 177",
    "121, 85, 72"
  ];

  function roll() {
    if (dice.style.animation) return;
    var number = Math.ceil(6 * Math.random());

    dice.style.animation = "roll 1s";
    sound.play();

    setTimeout(function() {
      dice.style.animation = "";
      dice.src = "a/" + number + ".svg";
      dice.alt = number;
      document.body.style.background = "rgb(" + colors[number - 1] + ")";
    }, 1000);
  }

  document.addEventListener("keydown", roll);
  document.addEventListener("click", roll);

  sound.load();

});
