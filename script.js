function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1
    if (num === 1) {
        console.log('Rock');
    } else if (num === 2) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }
}
getComputerChoice();