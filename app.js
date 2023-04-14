window.addEventListener('load', setButtons);

let gameLength = 5;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoiceArray = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);

  return computerChoiceArray[randomNumber];
}

function playRound() {

  let playerChoice = this.value;
  let computerChoice = getComputerChoice();

  if (playerChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore++;
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore++;
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore++;
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return 'It is a draw';
  }
}

function printWinner() {
  if (playerScore > computerScore) {
    return 'Player won the game!';
  } else {
    return 'Computer won the game!';
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

function setButtons() {
  const btnRock = document.querySelector('.btn-rock');
  const btnPaper = document.querySelector('.btn-paper');
  const btnScissors = document.querySelector('.btn-scissors');

  btnRock.value = 'rock';
  btnPaper.value = 'paper';
  btnScissors.value = 'scissors';

  btnRock.addEventListener('click', playRound);
  btnPaper.addEventListener('click', playRound);
  btnScissors.addEventListener('click', playRound);
}

