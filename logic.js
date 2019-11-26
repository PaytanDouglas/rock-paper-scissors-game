var game_result;
function play(userChoice) {
  var computerChoice = Math.random();

  if (computerChoice < 0.34) {
    computerChoice = "Rock";
  } else if (computerChoice < 0.67) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  game_result = compare(userChoice, computerChoice);
  document.getElementById("compChoice").innerHTML = computerChoice;
  document.getElementById("user").innerHTML = userChoice;
  document.getElementById("gameResult").innerHTML = game_result;
}

var compare = function(choice1, choice2){
  if (choice1 === choice2) {                          // game ends in a tie
    return "<img class='tie' alt='tie' src='img/blacktie.png'/>";
  } else if (choice1 === "Rock") {                     // user chooses rock
      if (choice2 === "Paper") {
        return "<img class='loser' alt='loser' src='img/loser.png'/>";
      } else {
        return "<img class='winner' alt='winner' src='img/winner.png'/>";
      }
  } else if (choice1 === "Paper") {                     // user chooses paper
      if (choice2 === "Scissors") {
        return "<img class='loser' alt='loser' src='img/loser.png'/>";
      } else {
        return "<img class='winner' alt='winner' src='img/winner.png'/>";
      }
  } else {                                              // user chooses scissors
      if (choice2 === "Rock") {
        return "<img class='loser' alt='loser' src='img/loser.png'/>";
      } else {
        return "<img class='winner' alt='winner' src='img/winner.png'/>";
      }
  }
}
