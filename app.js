
let gameLength = 5;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoiceArray = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);

  return computerChoiceArray[randomNumber];
}

function getPlayerChoice() {
  let playerChoice = String(prompt('Write your choice "rock", "paper" or "scissors"'));

  return playerChoice.toLowerCase();
}

function playRound(playerChoice, computerChoice) {

  if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    return console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore++;
    return console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore++;
    return console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    return console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    return console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore++;
    return console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else {
    return console.log('It is a draw');
  }
}

function printScores() {
  console.log(`Player Score = ${playerScore}`);
  console.log(`Computer Score = ${computerScore}`);
}

function printFinalScore() {
  if (playerScore > computerScore) {
    console.log('Player won the game!');
  } else {
    console.log('Computer won the game!');
  }
}

function game() {
  while (playerScore !== gameLength && computerScore !== gameLength) {
    playRound(getPlayerChoice(), getComputerChoice());
    printScores();
  }

  printFinalScore();
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}