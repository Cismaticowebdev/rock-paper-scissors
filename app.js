
function getComputerChoice() {
  let computerChoiceArray = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);

  return computerChoiceArray[randomNumber];
}

function playRound(playerChoice, computerChoice) {

  if (playerChoice === 'rock' && computerChoice === 'paper') {
    return console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return console.log(`You win! ${playerChoice} beats ${computerChoice}`);
  } else {
    return console.log('It is a draw');
  }
}

function game() {
  let gameLength = 5;

  for (let i = 0; i < gameLength; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }
}

function getPlayerChoice() {
  let playerChoice = String(prompt('Write your choice "rock", "paper" or "scissors"'));

  return playerChoice.toLowerCase();
}