function computerPlay() {
    let randNum = (Math.floor(Math.random() * 3));

    switch (randNum) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function humanPlay() {
    let choice = window.prompt("Rock, paper or scissors?", "Your choice")
    choice = choice.toLowerCase();
    switch (choice) {
        case 'rock':
            return 'Rock';
        case 'paper':
            return 'Paper';
        case 'scissors':
            return 'Scissors';
        default:
            alert('Please enter a correct choice: Rock Paper Scissors')
            humanPlay();
    }
}

const computerSelection = computerPlay();
const humanSelection = humanPlay();

function playersSelection(humanSelection, computerSelection) {
    if (computerSelection == humanSelection) {
        return `Draw! ${humanSelection} vs ${computerSelection}`;
    } else if (x) {
        
    }
}

function game() {

}