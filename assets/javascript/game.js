
var win = 0;
var loss = 0;
var guess = 10;


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var computerGuess = computerChoices[Math.floor(Math.random()*
		computerChoices.length)];
	console.log(computerGuess);
document.onkeyup = function(event) { //when keys are clicked this is what happens

	var userGuess = event.key; 
	
	var i = event.keyCode

    var results = "You picked" + userGuess + "CPU picked" + computerGuess;

	 if(userGuess === computerGuess) {
			win++;
			guess = 10;
			document.getElementById("game").innerHTML = results
		}
		else if (userGuess !== computerGuess){
			guess--;
			console.log(guess);
			if (guess === 0 ){guess = 10;
				loss++;
			document.getElementById("game").innerHTML = results
			}

		}

	var results = "You picked" + userGuess + "CPU picked" + computerGuess;
	
}