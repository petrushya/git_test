
const playBlock = document.querySelector('#playGame');
const playScore = document.querySelector('#playScore');
const para = playScore.querySelector('p');
const selectButton = document.querySelectorAll('button.selectButton');

let playerCounter = 0;
let compCounter = 0;

const computerArr = ["rock", "paper", "scissors"];
function getComputerChoice(){return computerArr[Math.floor(Math.random()*3)]};

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
      return roundResult = "draw";
      break;
    default:
      return roundResult = "computerWon";
  };
};

playBlock.addEventListener('click', (event) => {
  let target = event.target;
  const playerSelection = target.id;

  if(para.textContent !== '') para.textContent = '';

  const computerSelection = getComputerChoice();
  if(computerArr.includes(playerSelection)) playRound(playerSelection, computerSelection);
 
  switch(roundResult){
    case 'playerWon':
      para.textContent = `You Won the round! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
      playerCounter += 1;
      break;
    case 'computerWon':
      para.textContent = `You Lose the round! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
      compCounter += 1;
      break;
    case 'draw':
      para.textContent = `The round was a Draw! ${computerSelection.toUpperCase()} equals ${playerSelection.toUpperCase()}`;
      break
  };
  
  if(playerCounter === 5 || compCounter === 5){
    playerCounter === 5 ? para.innerHTML = `Game count: ${playerCounter} - ${compCounter}<br>You WON the Game!` : para.innerHTML = `Game count: ${playerCounter} - ${compCounter}<br>You LOSE the Game!`;
    selectButton.forEach((item) => item.setAttribute('disabled',''));

    const replayButton = document.createElement('button');
    replayButton.textContent = 'replay';
    playScore.appendChild(replayButton);
    replayButton.addEventListener('click', () => {
    	selectButton.forEach((item) => item.removeAttribute('disabled'));
    	playerCounter = 0;
    	compCounter = 0;
    	roundResult = '';
    	replayButton.remove();
    });
  };
});


