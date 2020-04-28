




var scores, roundScore, activePlayer;

// scores for players 1 and 2
scores = [0,0];
roundScore = 0;
activePlayer = 0;


var $currentPlayer0 = $("#current-0");
$currentPlayer0.text("0");
var $currentPlayer1 = $("#current-1");
$currentPlayer1.text("0");
var $totalScore0 = $("#score-0");
$totalScore0.text("0");
var $totalScore1 = $("#score-1");
$totalScore1.text("0");

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
	// document.querySelector("#current-" + activePlayer).textContent = dice;

	if (dice !== 1) {
		roundScore += dice;
		$("#current-" + activePlayer).text(roundScore);
	} else {
		scores[activePlayer] += roundScore;
		$("#score-" + activePlayer).text(scores[activePlayer]);
		roundScore = 0;
		$("#current-" + activePlayer).text(roundScore);



		if (activePlayer === 0) {
			
			activePlayer = 1;
		} else {
			
			activePlayer = 0;
		}
		// or can use ternary operator
		// activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	}

});































































































