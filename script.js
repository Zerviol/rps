function computerPlay() {
   let game = ['rock', 'paper', 'scissor'];
   let computerSelection = game[Math.floor(Math.random() * 3)];
   let playerSelection = game[Math.floor(Math.random() * 3)];
     playRound(playerSelection, computerSelection);
 }
 
 function playRound(playerSelection, computerSelection) {
 
     if (
        playerSelection === 'rock' && computerSelection === 'scissor' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissor' && computerSelection === 'paper'
     )
     { alert('You win! Winner') } 
 
     if (
        computerSelection === 'rock' && playerSelection === 'scissor' ||
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'scissor' && playerSelection === 'paper'
     )
     { alert('You lose! Computer wins') }
 
 }
 
 const playerSelection = "rock";
 const computerSelection = computerPlay();
 console.log(playRound(playerSelection, computerSelection));
