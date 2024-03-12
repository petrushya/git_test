
// array for computer
const computerArr = ["rock", "paper", "scissors"];

// counters for the game

let playerCount = 0;
let compCount = 0;

// selecting a random array element between the min and max values the way I liked it
// computerRandom = Math.floor(min + Math.random() * (max - min + 1))

function getComputerChoice(){return computerArr[Math.floor(Math.random()*3)]}

// check the user's prompt field entryand get the value

function getPlayerSelection(){
  let playerString = prompt("Please write your choice: rock, scissors or paper.");
  if(playerString && (playerString.toLowerCase() === "rock" || playerString.toLowerCase() === "paper" || playerString.toLowerCase() === "scissors")){
    return playerString = playerString.toLowerCase();
  }else{
     getPlayerSelection();
  }
}

// function describing one round with return of the score

function playRound(playerSelection, computerSelection){
  playerCount = 0;
  compCount = 0;
  if(playerSelection === "rock"){
    if(computerSelection === "scissors"){
      console.log("You Won! Rock beats Scissors!");
      return playerCount = 1;
    }else if(computerSelection === "paper"){
      console.log("You Lose! Paper beats Rock!");
      return compCount = 1;
    }else{
      console.log("Round Draw!");
    }
  }else if (playerSelection === "scissors"){
    if(computerSelection === "paper"){
      console.log("You Lose! Scissors beats Paper!");
      return playerCount = 1;
    }else if(computerSelection === "rock"){
      console.log("You Won! Rock beats Scissors!");
      return compCount = 1;
    }else{
      console.log("Round Draw!!");
    }
  }else{
    if(computerSelection === "rock"){
      console.log("You Won! Paper beats Rock!");
      return playerCount = 1;
    }else if(computerSelection === "scissors"){
      console.log("You Lose! Scissors beats Paper!");
      return compCount = 1;
    }else{
      console.log("Round Draw!");
    }
  }
}

// main function for the game

function playGame(){
  let playerCounter = 0;
  let compCounter = 0;
  for(let index = 0; index < 5; index++){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerSelection();
    playRound(playerSelection, computerSelection);  
    if(playerCount === 1){
      playerCounter += playerCount;
    }else if(compCount === 1){
      compCounter += compCount;
    }
  }
  if(playerCounter > compCounter) {
    console.log("You Won the Game! Game count:", playerCounter, "-", compCounter);
  }else if(playerCounter < compCounter){
    console.log("You Lose the Game! Game count:", playerCounter, "-", compCounter);
  }else{
    console.log("Game Draw, Game count:", playerCounter, "-", compCounter);
  }
}

// play on

playGame();

