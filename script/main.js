let humanScore = 0
let computerScore = 0

function computerPlay() {
    let randNum = (Math.floor(Math.random() * 3));

    switch (randNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function humanPlay() {
    let choice = window.prompt("Rock, paper or scissors? 5 Round Game", "Your choice")
    choice = choice.toLowerCase();
    switch (choice) {
        case 'rock':
            return 'rock';
        case 'paper':
            return 'paper';
        case 'scissors':
            return 'scissors';
        default:
            alert('Please enter a correct choice: Rock Paper scissors')
            return humanPlay();
    }
}



function playersSelection(humanSelection, computerSelection) {
    if (computerSelection == humanSelection) {
        return `Draw round, ${humanSelection} vs ${computerSelection} Human ${humanScore} - ${computerScore} Computer`;
    } else if (
        (computerSelection == 'rock' && humanSelection == 'scissors') || (computerSelection == 'paper' && humanSelection == 'rock') || (computerSelection == 'scissors' && humanSelection == 'paper')) {
            ++computerScore
            return `Computer wins this round, ${computerSelection} beats ${humanSelection}! Human ${humanScore} - ${computerScore} Computer`;
    } else {
            ++humanScore
            return `Human wins this round, ${humanSelection} beats ${computerSelection}! Human ${humanScore} - ${computerScore} Computer`;
    }
}

function game() {
    for(let round = 0; round < 5; round++) {
        let computerSelection = computerPlay();
        let humanSelection = humanPlay();
        console.log(playersSelection(humanSelection, computerSelection))
        if (round == 4 && humanScore > computerScore) {
            return `Human won the game! Human ${humanScore} vs ${computerScore} Computer`;
        } else if (round == 4 && humanScore < computerScore) {
            return `Computer won the game! Human ${humanScore} vs ${computerScore} Computer`;
        }  else if (round == 4 &&  humanScore == computerScore) {
            return `The game is a draw! Human ${humanScore} vs ${computerScore} Computer`;
        }
    }
}

console.log(game())