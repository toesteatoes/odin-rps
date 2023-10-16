console.log("Hello world, and welcome to rock paper scissors.");


//GAME LOGIC 
let playerScore = 0;
let compScore = 0;
let gameEnded = false;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice () {
  let choiceNumber = getRandomIntInclusive(1, 3);

  if (choiceNumber === 1) {
    return "rock";
  }
  else if (choiceNumber === 2) {
    return "paper";
  }
  else if (choiceNumber === 3) {
    return "scissors";
  }
  else {
    console.log("Error");
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("tie");
    result.textContent = "Round tied!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {   
    playerScore++;
    result.textContent = "Player wins round!";
    console.log("player gets point. total: " + playerScore);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    result.textContent = "Player wins round!";
    console.log("player gets point. total: " + playerScore);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    result.textContent = "Player wins round!";
    console.log("player gets point. total: " + playerScore);
  } else if (computerSelection === "rock" && playerSelection === "scissors") {   
    compScore++;
    result.textContent = "Computer wins round!";
    console.log("comp gets point. total: " + compScore);
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    compScore++;
    result.textContent = "Computer wins round!";
    console.log("comp gets point. total: " + compScore);
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    compScore++;
    result.textContent = "Computer wins round!";
    console.log("comp gets point. total: " + compScore);
  } 
}

function endGame() {
  gameEnded = true;
  result.textContent = "Game over."
  but1.removeEventListener("click", playRock);
  but2.removeEventListener("click", playPaper)
  but3.removeEventListener("click", playScissors);
}

function playRock() {
  if (!gameEnded) {
    playRound("rock", getComputerChoice());
    score1.textContent = "Player: " + playerScore;
    score2.textContent = "Computer: " + compScore;
  }
  if (playerScore === 3 || compScore == 3) {
    endGame();
  }
}

function playPaper() {
  if (!gameEnded) {
    playRound("paper", getComputerChoice());
    score1.textContent = "Player: " + playerScore;
    score2.textContent = "Computer: " + compScore;
  }
  if (playerScore === 3 || compScore == 3) {
    endGame();
  }
}

function playScissors() {
  if (!gameEnded) {
    playRound("scissors", getComputerChoice());
    score1.textContent = "Player: " + playerScore;
    score2.textContent = "Computer: " + compScore;
  }
  if (playerScore === 3 || compScore == 3) {
    endGame();
  }
}



//GAME UI AND MORE LOGIC 
const theDiv = document.getElementById("selections");
const theOtherDiv = document.getElementById("score-display");

const but1 = document.createElement("button");
const but2 = document.createElement("button");
const but3 = document.createElement("button");

but1.textContent = "Rock";
but2.textContent = "Paper";
but3.textContent = "Scissors";

theDiv.appendChild(but1);
theDiv.appendChild(but2);
theDiv.appendChild(but3);


const score1 = document.createElement("p");
const score2 = document.createElement("p");
const result = document.createElement("p");

score1.textContent = "Player: " + playerScore;
score2.textContent = "Computer: " + compScore;

theOtherDiv.appendChild(score1);
theOtherDiv.appendChild(score2);
theOtherDiv.appendChild(result);


but1.addEventListener("click", playRock);
but2.addEventListener("click", playPaper)
but3.addEventListener("click", playScissors);