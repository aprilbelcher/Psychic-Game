
var wins = 0;
var losses = 0;
var guessesleft = 10;



var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var computerGuess = computerChoices[Math.floor(Math.random()*
		computerChoices.length)];
	
document.onkeyup = function(event) { 

	var userGuess = event.key; 
	//alert(userGuess);
	
    
    

	
	var i = event.keyCode

    var results =  userGuess ;
       console.log(results);
    //document.getElementById("game").innerHTML = results
    

	 if(userGuess === computerGuess) { //user guessed right
			wins++;
			guessesleft = 10;
			document.getElementById("wins").innerHTML = wins
			
		}
		else if (userGuess !== computerGuess){ //user guessed wrong
			guessesleft--;
			document.getElementById("guessesLeft").innerHTML = guessesleft;
			console.log("guessleft:"+guessesleft);
			
		
			if (guessesleft === 0 ){ guessesleft = 10;
				losses++;
				document.getElementById("losses").innerHTML = losses;
			document.getElementById("game").innerHTML = results
			}

		}

	
	
}