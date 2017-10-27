//variables to store guess selectora
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = 10;
var guessedLetters = [];

//press key function
document.onkeyup = function(event) { 

	var userGuess = event.key; 

	//array of computer's choices
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		
	var computerGuess = computerChoices[Math.floor(Math.random()*
			computerChoices.length)];

		//first condition
		if (userGuess || computerGuess) {
			
			//user guessed correctly
			if (userGuess === computerGuess) {
			wins++;
			}
			//user guessed incorrect
			else if (userGuess !== computerGuess) {
			guessesLeft--;guessedLetters++;
			}
			//score is 0
			if (guessesLeft === 0 ){
					losses++; (guessesLeft = 10);
			}
		
    var results =
    	"<p>Wins: " + wins + "</p>" +
    	"<p>Losses " + losses + "</p>" +
    	"<p>Guesses Left: " + guessesLeft + "</p>" +
    	"<p>Your Guesses so far: " + guessedLetters + "</p>"; 

    	document.getElementById("game")innerHTML = results;
	}
};


	
	
