
function getComputerChoice() {
  let computerChoiceArray = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * computerChoiceArray.length);

  return computerChoiceArray[randomNumber];
}

function playRound(playerChoice, computerChoice) {

  if (playerChoice === 'rock' && computerChoice === 'paper') {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return 'It is a draw';
  }
}