function computerPlay() {
    let rps = ['Rock', 'Paper', 'Scissor'];
    let round = rps[Math.floor(Math.random() * 3)];
return round;
}

computerPlay();


function playRound(playerSelection, computerSelection) {

    if ( 
        (playerSelection == 'Rock' && computerSelection == 'Scissor') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissor' && computerSelection == 'Paper')
        )
    { alert('Player Wins') }

    if (
        (computerSelection == 'Rock' && playerSelection == 'Scissor') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock') ||
        (computerSelection == 'Scissor' && playerSelection == 'Paper')
        ) 
    { alert('Computer Wins') }

    if (
        (playerSelection == 'Rock' && computerSelection == 'Rock')  ||
        (playerSelection == 'Paper' && computerSelection == 'Paper') ||
        (playerSelection == 'Scissor' && computerSelection == 'Scissor')
        )
    { alert('Tie game') }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
