

var scores, roundScore, activePlayer;

// scores for players 1 and 2
scores = [0,0];
roundScore = 0;
activePlayer = 0;


// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// To hide the dice we can:
// document.querySelector(".dice").style.visibility = "hidden";
// or
// document.querySelector(".dice").style.display = "none";
var diceImg = document.getElementsByClassName("dice")[0];
diceImg.style.display = "none";

var rollDiceBtn = document.getElementsByClassName("btn-roll")[0];

// anonymous function to display the right dice number
rollDiceBtn.addEventListener("click", function() {
	var dice = Math.floor(Math.random() * 6) + 1;
	diceImg.src = "dice-" + dice + ".png";
	diceImg.style.display = "block";
	document.querySelector("#current-" + activePlayer).textContent = dice;
});
























































