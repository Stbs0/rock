const rock = document.querySelector(".rock");

const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const result = document.querySelector(".result-show");
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
  console.log(computerSelection);
  if (playerSelection === rock && computerSelection === "paper") {
    return 1;
  }
  if (playerSelection === rock && computerSelection === "scissor") {
    return 3;
  }
  if (playerSelection === rock && computerSelection === "rock") {
    return 2;
  }
  if (playerSelection === paper && computerSelection === "paper") {
    return 2;
  }
  if (playerSelection === paper && computerSelection === "scissor") {
    return 1;
  }
  if (playerSelection === paper && computerSelection === "rock") {
    return 3;
  }
  if (playerSelection === scissor && computerSelection === "paper") {
    return 3;
  }
  if (playerSelection === scissor && computerSelection === "scissor") {
    return 2;
  }
  if (playerSelection === scissor && computerSelection === "rock") {
    return 1;
  }
}
const list = document.querySelector(".result-list");
const win = document.querySelector(".me");
const lose = document.querySelector(".him")
rock.addEventListener("click", function () {
  const item = document.createElement("li");
  const myItem = playRound(rock, computerSelection);
  if (myItem === 1) {
    item.innerText = 
  }
  list.appendChild(item);
  item.innerText = myItem;
});
paper.addEventListener("click", function () {
  const item = document.createElement("li");
  const myItem = playRound(paper, computerSelection);
  list.appendChild(item);
  item.innerText = myItem;
});
scissor.addEventListener("click", function () {
  const item = document.createElement("li");
  const myItem = playRound(scissor, computerSelection);
  list.appendChild(item);
  item.innerText = myItem;
});
