var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var youWin = 0;
  var youLose = 0;
  var guessesLeft = 13;
  var guessedLetters = [];

  document.onkeyup = function(event) {
    var yourGuess = event.key; 
    guessedLetters.push(yourGuess);    
    var answer = letters[Math.floor(Math.random() *    letters.length)];

    
    if (yourGuess === answer) {
      youWin++;
      guessesLeft = 10;
    }
    
    else {
      guessesLeft--;
    }

    
    if (guessesLeft === 0){
      youLose++;
      guessesLeft = 10;
    }

    var html = "<p><strong>Guess what letter I'm thinking of</strong>:</p>" + "<p>Wins: " + youWin + "</p>" + "<p>Loses: "+ youLose + "<p>Guesses Remaining: " + guessesLeft + "<p>Guessed Letter: " +  guessedLetters.join(', '); //Show guessed letters here
    document.querySelector("#main").innerHTML = html;
  }