const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
let pScore = 0;
let cScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1
    if (num === 1) {
        return 'rock';
    } else if (num === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector('.results');
    const score = document.querySelector('.score');
    
    if (playerSelection === 'rock' && computerSelection === 'rock' // if TIE game
    || playerSelection === 'paper' && computerSelection === 'paper'
    || playerSelection === 'scissors' && computerSelection === 'scissors') {
        score.textContent = `Player Score: ${pScore} Computer Score: ${cScore}`;
        results.textContent = 'Tie round';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' // if PLAYER wins
    || playerSelection === 'scissors' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'rock') {
        pScore++;
        score.textContent = `Player Score: ${pScore} Computer Score: ${cScore}`;
        results.textContent = 'You won that round!';
    } else { // if YOU LOSE
        cScore++;
        score.textContent = `Player Score: ${pScore} Computer Score: ${cScore}`;
        results.textContent = 'You lost that round...';
    }

    if (pScore === 5 && cScore < 5) {
        results.textContent = 'Game over. You win the game!';
        rockButton.removeEventListener('click', rockEventHandler);
        paperButton.removeEventListener('click', paperEventHandler);
        scissorsButton.removeEventListener('click', scissorsEventHandler);
    } else if (cScore === 5 && pScore < 5) {
        results.textContent = 'Game over. You lost the game!';
        rockButton.removeEventListener('click', rockEventHandler);
        paperButton.removeEventListener('click', paperEventHandler);
        scissorsButton.removeEventListener('click', scissorsEventHandler);
    }
}

// Created eventHandlers so that we can removeEventListener inside playRound()
function rockEventHandler() {playRound('rock', getComputerChoice())};
function paperEventHandler() {playRound('paper', getComputerChoice())};
function scissorsEventHandler() {playRound('scissors', getComputerChoice())};

// Button Listeners
rockButton.addEventListener('click', rockEventHandler);
paperButton.addEventListener('click', paperEventHandler);
scissorsButton.addEventListener('click', scissorsEventHandler);