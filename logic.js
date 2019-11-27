function initial () {
  var computerChoice = "<img class='qnmark' alt='Question Mark' src='img/blue-qnmark.png'/>";
  document.getElementById("compChoice").innerHTML = computerChoice;
  var userChoice = "<img class='qnmark' alt='Question Mark' src='img/multi-qnmark.png'/>";
  document.getElementById("user").innerHTML = userChoice;
  var game_result = "<img class='qnmark2' alt='Question Mark' src='img/purp-qnmark.png'/>";
  document.getElementById("gameResult").innerHTML = game_result;
}

function play(userChoice) {
  if (userChoice === 'Rock') {
    userChoice = "<img class='rock' alt='rock' src='img/skull-hand.png'/>";
  } else if (userChoice === 'Paper') {
    userChoice = "<img class='paper' alt='paper' src='img/paper.png'/>";
  } else {
    userChoice = "<img class='scissors' alt='scissors' src='img/gold-scissors.png'/>";
  }
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "<img class='rock' alt='rock' src='img/skull-hand.png'/>";
  } else if (computerChoice < 0.67) {
    computerChoice = "<img class='paper' alt='paper' src='img/paper.png'/>";
  } else {
    computerChoice = "<img class='scissors' alt='scissors' src='img/gold-scissors.png'/>";
  }
  game_result = compare(userChoice, computerChoice);
  document.getElementById("compChoice").innerHTML = computerChoice;
  document.getElementById("user").innerHTML = userChoice;
  document.getElementById("gameResult").innerHTML = game_result;
}

var compare = function(choice1, choice2){
  if (choice1 === choice2) {                                                            // game ends in a tie
    return "<img class='tie' alt='tie' src='img/blacktie.png'/>";
  } else if (choice1 === "<img class='rock' alt='rock' src='img/skull-hand.png'/>") {   // user chooses rock
      if (choice2 === "<img class='paper' alt='paper' src='img/paper.png'/>") {
        return "<img class='loser' alt='loser' src='img/loser.png'/>";
      } else {
        return "<img class='winner' alt='winner' src='img/winner.png'/>";
      }
  } else if (choice1 === "<img class='paper' alt='paper' src='img/paper.png'/>") {      // user chooses paper
      if (choice2 === "<img class='scissors' alt='scissors' src='img/gold-scissors.png'/>") {
        return "<img class='loser' alt='loser' src='img/loser.png'/>";
      } else {
        return "<img class='winner' alt='winner' src='img/winner.png'/>";
      }
  } else {                                                                              // user chooses scissors
      if (choice2 === "<img class='rock' alt='rock' src='img/skull-hand.png'/>") {
        return "<img class='loser' alt='loser' src='img/loser.png'/>";
      } else {
        return "<img class='winner' alt='winner' src='img/winner.png'/>";
      }
  }
}
