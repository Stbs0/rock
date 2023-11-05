let playerSelection, computerSelection;

function playRound(playerSelection, computerSelection) {
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
  computerSelection = getComputerChoice();
  let answer = window.prompt("Rock, paper, scissors?").toLowerCase();
  playerSelection = answer;
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  }
  if (playerSelection === "rock" && computerSelection === "scissor") {
    return "You won! rock beats scissor";
  }
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a draw!";
  }
  if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a draw!";
  }
  if (playerSelection === "paper" && computerSelection === "scissor") {
    return "You lose! scissor beats paper";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You won! paper beats rock";
  }
  if (playerSelection === "scissor" && computerSelection === "paper") {
    return "You win! scissor beats paper";
  }
  if (playerSelection === "scissor" && computerSelection === "scissor") {
    return "It's a draw!";
  }
  if (playerSelection === "scissor" && computerSelection === "rock") {
    return "You lose! paper beats rock";
  }
}
console.log(playRound(playerSelection, computerSelection));

console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));

console.log(playRound(playerSelection, computerSelection));
console.log(playRound(playerSelection, computerSelection));
