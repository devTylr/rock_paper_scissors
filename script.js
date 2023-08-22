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
    const para = document.createElement('p');
    
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
    } else if (cScore === 5 && pScore < 5) {
        results.textContent = 'Game over. You lost the game!';
    }
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

// function game() {


//     for (let i = 0; i < 5; i++) {       // play 5 rounds
//         const playerSelection = prompt('question').toLowerCase();
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         console.log(pScore, cScore);
//     }

//     if (pScore > cScore) {       // win / lose message
//         console.log(`You won!`);
//     } else if (pScore < cScore) {
//         console.log(`You lost.`);
//     } else {
//         console.log(`Tie game.`)
//     }
// }
// game();