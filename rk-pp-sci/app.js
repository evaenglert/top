console.log("Hello world!")
console.log(computerPlay())

function computerPlay() {
  const array = ["Rock", "Paper", "Scissors"];
  const number = Math.floor(Math.random() * 3);
  return array[number];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.lower() === computerSelection.lower()) {
    return "It is a tie!";
  }
  else if ((playerSelection.lower() === "rock" && computerSelection === "Scissors") || (playerSelection.lower() === "paper" && computerSelection === "Rock") ||(playerSelection.lower() === "scissors" && computerSelection === "Paper")) {
    return "Player wins!";
  }
  else {
    return "Computer wins!";
  }
}
