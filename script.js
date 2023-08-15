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
    if (playerSelection === 'rock' && computerSelection === 'rock' // if TIE game
    || playerSelection === 'paper' && computerSelection === 'paper'
    || playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Tie round');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' // if PLAYER wins
    || playerSelection === 'scissors' && computerSelection === 'paper'
    || playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('Round won!');
        pScore++;
    } else { // if YOU LOSE
        console.log('Round lost :(');
        cScore++;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('question').toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(pScore, cScore);
    }

    if (pScore > cScore) {
        console.log(`You won!`);
    } else if (pScore < cScore) {
        console.log(`You lost.`);
    } else {
        console.log(`Tie game.`)
    }
}
game();