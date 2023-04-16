window.addEventListener('load', setButtons);

let gameLength = 5;
let playerScore = 0;
let computerScore = 0;
let roundResult = '';

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
    updateComputerScore();
    roundResult = `You lose! ${computerChoice} beats ${playerChoice}`;
    updateRoundResult();
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    playerScore++;
    updatePlayerScore();
    roundResult = `You win! ${playerChoice} beats ${computerChoice}`;
    updateRoundResult();
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    playerScore++;
    updatePlayerScore();
    roundResult = `You win! ${playerChoice} beats ${computerChoice}`;
    updateRoundResult();
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    updateComputerScore();
    roundResult = `You lose! ${computerChoice} beats ${playerChoice}`;
    updateRoundResult();
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    updateComputerScore();
    roundResult = `You lose! ${computerChoice} beats ${playerChoice}`;
    updateRoundResult();
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    playerScore++;
    updatePlayerScore();
    roundResult = `You win! ${playerChoice} beats ${computerChoice}`;
    updateRoundResult();
  } else {
    roundResult = 'It is a draw';
    updateRoundResult();
  }

  if (playerScore === gameLength || computerScore === gameLength) {
    printGameWinner();
    updateRoundResult();
    disableButtons();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundResult = '';
  updatePlayerScore();
  updateComputerScore();
  updateRoundResult();
  enableButtons();
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

function updatePlayerScore() {
  const playerScoreText = document.querySelector('.player-score');
  playerScoreText.textContent = `Player Score: ${playerScore}`;
}

function updateComputerScore() {
  const computerScoreText = document.querySelector('.computer-score');
  computerScoreText.textContent = `Computer Score: ${computerScore}`;
}

function updateRoundResult() {
  const roundResultText = document.querySelector('.round-result');
  roundResultText.textContent = `${roundResult}`;
}

function printGameWinner() {
  if (playerScore > computerScore) {
    roundResult = `You won ${playerScore} rounds, you are the winner`;
  } else {
    roundResult = `The computer won ${computerScore} rounds, the computer is the winner`;
  }
}

function disableButtons() {
  const btnRock = document.querySelector('.btn-rock');
  const btnPaper = document.querySelector('.btn-paper');
  const btnScissors = document.querySelector('.btn-scissors');

  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}

function enableButtons() {
  const btnRock = document.querySelector('.btn-rock');
  const btnPaper = document.querySelector('.btn-paper');
  const btnScissors = document.querySelector('.btn-scissors');

  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
}