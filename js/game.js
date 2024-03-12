
// array for computer
const computerArr = ["rock", "paper", "scissors"];

// selecting a random array element between the min and max values the way I liked it
// computerRandom = Math.floor(min + Math.random() * (max - min + 1))

function getComputerChoice(){return computerArr[Math.floor(Math.random()*3)]}

// check the user's prompt field entry and get the value

function getPlayerSelection(){
  let playerString = prompt("Please write your choice: rock, scissors or paper.");
  if(playerString && computerArr.includes(playerString.toLowerCase())){
    return playerString = playerString.toLowerCase();
  }else{
     getPlayerSelection();
  }
}

// function describing one round with return of the result

let roundResult = "";

function playRound(playerSelection, computerSelection){
	switch(`${playerSelection}-${computerSelection}`){
		case 'rock-scissors':
		case 'scissors-paper':
		case 'paper-rock':
      return roundResult = "playerWon";
			break;
		case 'rock-rock':
		case 'paper-paper':
		case 'scissors-scissors':
			return roundResult = "";
			break;
		default:
      return roundResult = "computerWon";
	}
}

// main function for the game

function playGame(){
  let playerCounter = 0;
  let compCounter = 0;
  for(let index = 0; index < 5; index++){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerSelection();
		const playerRoundWon = `You Won! ${playerSelection} beats ${computerSelection}`;
		const computerRoundWon = `You Lose! ${computerSelection} beats ${playerSelection}`;
		const roundDeadHeat = `Dead Heat! ${computerSelection} equals ${playerSelection}`;
    playRound(playerSelection, computerSelection);  
    if(roundResult === "playerWon"){
    	console.log(playerRoundWon);
      playerCounter += 1;
    }else if(roundResult === "computerWon"){
    	console.log(computerRoundWon);
      compCounter += 1;
    }else{
    	console.log(roundDeadHeat);
    }
  }
  if(playerCounter > compCounter) {
    console.log(`You Won the Game! Game count: ${playerCounter} - ${compCounter}`);
  }else if(playerCounter < compCounter){
    console.log(`You Lose the Game! Game count: ${playerCounter} - ${compCounter}`);
  }else{
    console.log(`Dead Heat, Game count: ${playerCounter} - ${compCounter}`);
  }
}

// play on

//playGame();

