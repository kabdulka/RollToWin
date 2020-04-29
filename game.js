

var scores, roundScore, activePlayer, gameWon, finalScore;

initializeGame();

// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

// To hide the dice we can:
// document.querySelector(".dice").style.visibility = "hidden";
// or
// document.querySelector(".dice").style.display = "none";
var diceImg = document.getElementsByClassName("dice")[0];
var diceImg2 = document.getElementsByClassName("dice")[1];

var rollDiceBtn = document.getElementsByClassName("btn-roll")[0];
// anonymous function to display the right dice number
rollDiceBtn.addEventListener("click", function() {

	if (!gameWon && finalScore !== "") {
		var dice = Math.floor(Math.random() * 6) + 1;
		var dice2 = Math.floor(Math.random() * 6) + 1;
		diceImg.src = "dice-" + dice + ".png";
		diceImg2.src = "dice-" + dice2 + ".png";
		diceImg.style.display = "block";
		diceImg2.style.display = "block";
		// document.querySelector("#current-" + activePlayer).textContent = dice;
		var bothDiesSix = (dice==6 & dice2==6);
		var oneDiceIsOne = (dice==1 || dice2==1);
		var eitherCondition = bothDiesSix || oneDiceIsOne;
		if (!eitherCondition) {
			roundScore = roundScore + dice + dice2;
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
	if (finalScore === "") {
		alert("Please enter a numerical max score and click SET SCORE");;
	}
});


// document.querySelector(".btn-hold").addEventListener("click", function() {
// 	alert("clicked");
// });
$(".btn-hold").click(function() {
	// alert("clicked");
	if (!gameWon && finalScore !== "") {
		scores[activePlayer] += roundScore;
		$("#score-" + activePlayer).text(scores[activePlayer]);

		if (scores[activePlayer] >= (finalScore)) {
			// player has won
			$("#name-" + activePlayer).text("winner");
			// diceImg.style.display = "none";
			$(".dice").css("display", "none");
			$(".player-"+activePlayer+"-panel").addClass("winner");
			$(".player-"+activePlayer+"-panel").toggleClass("active");
			gameWon = true;
		} else {
			switchPlayer();	
		}
	}
	if (finalScore === "") {
		alert("Please enter a numerical max score and click SET SCORE");
	}
});

// changes acive status and toggles active class
function switchPlayer() {

	roundScore = 0;
	if (activePlayer === 0) {
		activePlayer = 1;
	} else {
		activePlayer = 0;
	}

	$(".player-1-panel").toggleClass("active");
	$(".player-0-panel").toggleClass("active");
	// hide the image
	// diceImg.style.display = "none";
	$(".dice").css("display", "none");
}

$(".btn-new").click(initializeGame);

$("#set-score").click( function() {
	// alert(typeof($("#max-score").val()));
	finalScore = $("#max-score").val();
	alert("You've set a final score of " + finalScore);
	if (finalScore === "") {
		alert("Please enter a numerical max score and click SET SCORE");
	}
});

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

	$("#max-score").val("");
	finalScore = "";
}



// check if last dice rolled was a 6 and current is also a 6
// set game score to input field






















































































