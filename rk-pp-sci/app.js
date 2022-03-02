console.log("Hello world!")
console.log(computerPlay())

function computerPlay() {
  const array = ["Rock", "Paper", "Scissors"];
  const number = Math.floor(Math.random() * 3);
  return array[number];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It is a tie!";
  }
  else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") || (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")) {
    return "Player wins!";
  }
  else {
    return "Computer wins!";
  }
}

function game(rounds = 5) {
  currentPointsPlayer = 0
  currentPointsComp = 0
  for (let i = 0; i < rounds; i++) {
    player = prompt("Please select between Rock, Paper, Scrissors!");
    computer = computerPlay();
    result = playRound(player, computer);

    console.log(result);
    if (result === "Player wins!") {
      currentPointsPlayer += 1;
    }
    else {
      currentPointsComp += 1;
    }
    console.log("Current Points - Player: " + currentPointsPlayer + " Computer: " + currentPointsComp);
  }

  if (currentPointsPlayer > currentPointsComp) {
    console.log("Player won the whole game, congrats!!");
  }
  else if (currentPointsPlayer < currentPointsComp) {
    console.log("Unfortunately the computer won the game! Try again!");
  }
  else {
    console.log("Well this is a tie! Great game both!");
  }
}

game()
