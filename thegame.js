console.log("Hello world, and welcome to rock paper scissors.");

let playerScore = 0;
let compScore = 0;

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
  } else if (playerSelection === "rock" && computerSelection === "scissors") {   
    playerScore++;
    console.log("player gets point. total: " + playerScore);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("player gets point. total: " + playerScore);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("player gets point. total: " + playerScore);
  } else if (computerSelection === "rock" && playerSelection === "scissors") {   
    compScore++;
    console.log("comp gets point. total: " + compScore);
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    compScore++;
    console.log("comp gets point. total: " + compScore);
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    compScore++;
    console.log("comp gets point. total: " + compScore);
  } 
}

function game() {
  while (playerScore !== 3 || compScore !== 3) {
    playRound(prompt("Enter rock paper or scissors"), getComputerChoice());

    if (playerScore === 3) {
      console.log("player wins!");
      break;
    } else if (compScore === 3) {
      console.log("comp wins!");
      break;
    }
  }


}

game();