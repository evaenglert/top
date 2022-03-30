let currentPointsPlayer = 0;
let currentPointsComp = 0;
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
const computerSide = document.querySelector('.computer-side');
const playerSide = document.querySelector('.player-side');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const playerScore = document.querySelector('.player-side .scores');
const computerScore = document.querySelector('.computer-side .scores');

const choiceToEmoji = ["👊🏻", "🤚🏻", "✌🏻"];
const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  const number = Math.floor(Math.random() * 3);
  return choices[number];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It is a tie!";
  }
  else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") || (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
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


  // playerChoice.textContent = "Your choice: " + e.target.className;

  playerChoice.textContent = choiceToEmoji[choices.indexOf(e.target.className)];
  console.log(e.target.className);
  computerChoice.textContent = choiceToEmoji[choices.indexOf(computerSelection)];
  if (result === "Player wins!") {

    currentPointsPlayer++ ;
    playerScore.textContent = currentPointsPlayer;
  }
  else {
    currentPointsComp++;
    console.log(currentPointsComp);
    computerScore.textContent = currentPointsComp;
  }

  console.log("Current Points - Player: " + currentPointsPlayer + " Computer: " + currentPointsComp);





  if (currentPointsComp === 5 || currentPointsPlayer === 5) {
    const finalResults = document.createElement('div');
    finalResults.className = "final-results";
    body.appendChild(finalResults);
    console.log("GAME END")

    buttons.forEach(button => {
      button.removeEventListener("click", game);
    })

    if (currentPointsPlayer > currentPointsComp) {
      console.log("Player won the whole game, congrats!!");
      finalResults.textContent = 'Player won the whole game, congrats!!';

    }
    else if (currentPointsPlayer < currentPointsComp) {
      console.log("Unfortunately the computer won the game! Try again!");
      finalResults.textContent = "Unfortunately the computer won the game! Try again!";

    }
    else {
      console.log("Well this is a tie! Great game both!");
      finalResults.textContent = "Well this is a tie! Great game both!";

    }


    newGameButton = document.createElement('button');
    newGameButton.textContent = 'NEW GAME!';
    body.appendChild(newGameButton);
    newGameButton.addEventListener("click", startNewGame);

  }




}

const startNewGame = function() {
  buttons.forEach(button => {
    button.addEventListener("click", game)
    this.remove();
  })

  playerChoice.textContent = "";
  finalResults = document.querySelector(".final-results");
  body.removeChild(finalResults);

  currentPointsPlayer = 0;
  currentPointsComp = 0;

  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

buttons.forEach(button => {
  button.addEventListener("click", game)
  })
