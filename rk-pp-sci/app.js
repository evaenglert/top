let currentPointsPlayer = 0;
let currentPointsComp = 0;
const buttons = document.querySelectorAll('button');

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

const game = function(e, rounds = 5) {
  let computerSelection = computerPlay();
  result = playRound(e.target.className, computerSelection);
  console.log(result);
  if (result === "Player wins!") {
    currentPointsPlayer++ ;
  }
  else {
    currentPointsComp++;
  }

  console.log("Current Points - Player: " + currentPointsPlayer + " Computer: " + currentPointsComp);


  if (currentPointsComp === 5 || currentPointsPlayer === 5) {
    console.log("GAME END")
    buttons.forEach(button => {
      button.removeEventListener("click", game);
    })

    if (currentPointsPlayer > currentPointsComp) {
      console.log("Player won the whole game, congrats!!");

    }
    else if (currentPointsPlayer < currentPointsComp) {
      console.log("Unfortunately the computer won the game! Try again!");

    }
    else {
      console.log("Well this is a tie! Great game both!");

    }
    console.log(this);

    currentPointsPlayer = 0;
    currentPointsComp = 0;

  }




}

buttons.forEach(button => {
  button.addEventListener("click", game)
  })
