

var scores, roundScore, activePlayer, gameWon;

initializeGame();

// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// To hide the dice we can:
// document.querySelector(".dice").style.visibility = "hidden";
// or
// document.querySelector(".dice").style.display = "none";
var diceImg = document.getElementsByClassName("dice")[0];


var rollDiceBtn = document.getElementsByClassName("btn-roll")[0];
// anonymous function to display the right dice number
rollDiceBtn.addEventListener("click", function() {

	if (!gameWon) {
		var dice = Math.floor(Math.random() * 6) + 1;
		diceImg.src = "dice-" + dice + ".png";
		diceImg.style.display = "block";
		// document.querySelector("#current-" + activePlayer).textContent = dice;

		if (dice !== 1) {
			roundScore += dice;
			$("#current-" + activePlayer).text(roundScore);
		} else {
			// player has rolled a 1
			// scores[activePlayer] += roundScore;
			// $("#score-" + activePlayer).text(scores[activePlayer]);
			roundScore = 0;
			$("#current-" + activePlayer).text(roundScore);
			switchPlayer();
		}
	}
});


// document.querySelector(".btn-hold").addEventListener("click", function() {
// 	alert("clicked");
// });
$(".btn-hold").click(function(gameState) {
	// alert("clicked");
	if (!gameWon) {
		scores[activePlayer] += roundScore;
		$("#score-" + activePlayer).text(scores[activePlayer]);

		if (scores[activePlayer] >= 10) {
			// player has won
			$("#name-" + activePlayer).text("winner");
			diceImg.style.display = "none";
			$(".player-"+activePlayer+"-panel").addClass("winner");
			$(".player-"+activePlayer+"-panel").toggleClass("active");
			gameWon = true;
		} else {
			switchPlayer();	
		}
	}
});

// changes acive status and toggles active class
function switchPlayer() {

	if (activePlayer === 0) {
		activePlayer = 1;
	} else {
		activePlayer = 0;
	}

	$(".player-1-panel").toggleClass("active");
	$(".player-0-panel").toggleClass("active");
	// hide the image
	diceImg.style.display = "none";
}

$(".btn-new").click(initializeGame);


function initializeGame() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gameWon = false;

	var $currentPlayer0 = $("#current-0");
	$currentPlayer0.text("0");
	var $currentPlayer1 = $("#current-1");
	$currentPlayer1.text("0");
	var $totalScore0 = $("#score-0");
	$totalScore0.text("0");
	var $totalScore1 = $("#score-1");
	$totalScore1.text("0");
	$("#name-0").text("Player 1");
	$("#name-1").text("Player 2");
	// document.querySelector(".player-0-panel").classList.remove("winner");
	// $(".player-1-panel").removeClass("winner");
	// document.getElementsByClassName("player-0-panel")[0].classList.remove("active");
	// $("player-1-panel").removeClass("active");
	$(".player-0-panel").removeClass("winner");
	$(".player-1-panel").removeClass("winner");
	$(".player-0-panel").removeClass("active");
	$(".player-1-panel").removeClass("active");
	$(".player-0-panel").addClass("active");
	$(".dice").css("display", "none");

}


























































































