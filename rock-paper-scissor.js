function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);

  if (number === 0) {
    return "rock";
  }
  if (number === 1) {
    return "paper";
  }
  if (number === 2) {
    return "scissor";
  }
}
function play(playerSelection, getComputerChoice) {
  answer = prompt("rock paper scissor?");
  playerSelection = answer.toLowerCase();

  console.log(playerSelection);
}
