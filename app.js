
function getComputerChoice() {
  let computerChoiceArray = ['Rock', 'Paper', 'Scissors'];
  let randomNumber = Math.floor(Math.random()*computerChoiceArray.length);

  return computerChoiceArray[randomNumber];
}