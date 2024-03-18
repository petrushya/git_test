
const playBlock = document.querySelector('#playGame');
const playScore = document.querySelector('#playScore');
const para = playScore.querySelector('p');

const computerArr = ["rock", "paper", "scissors"];
function getComputerChoice(){return computerArr[Math.floor(Math.random()*3)]}

let roundResult = "";

function playRound(playSelect, compSelect){
  switch(`${playSelect}-${compSelect}`){
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
  };
};

let playerCounter = 0;
let compCounter = 0;

playBlock.addEventListener('click', (event) => {
  let target = event.target;
  const playerSelection = target.id;

  if(para.textContent !== '') para.textContent = '';

  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
 
  switch(roundResult){
    case 'playerWon':
      para.textContent = `You Won the round! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
      playerCounter += 1;
      break;
    case 'computerWon':
      para.textContent = `You Lose the round! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
      compCounter += 1;
      break;
    default:
      para.textContent = `The round was a Draw! ${computerSelection.toUpperCase()} equals ${playerSelection.toUpperCase()}`;
  };
  
  if(playerCounter === 5 || compCounter === 5){
    playerCounter === 5 ? para.innerHTML = `Game count: ${playerCounter} - ${compCounter}<br>You WON the Game!` : para.innerHTML = `Game count: ${playerCounter} - ${compCounter}<br>You LOSE the Game!`;
    const selectButton = document.querySelectorAll('button.selectButton');
    selectButton.forEach((item) => item.setAttribute('disabled',''));
    playerCounter = 0;
    compCounter = 0;
  };
});


