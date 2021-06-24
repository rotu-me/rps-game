playerName = window.prompt("What's your name?", "Player");
let options = ['rock','paper','scissors'];
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;
function computerPlay(){ 
    return options[Math.floor(Math.random()*options.length)]; 
}
function computerWin(){
    computerScore++;
    return "computer wins this round";
}
function playerWin(){
    playerScore++;
    return playerName + " wins this round";
}
function playGame(computerSelection,playerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerInput = prompt("Choose, ROCK PAPER or SCISSORS?"); 
    playerSelection = playerInput.toLowerCase();
    if ((playerSelection=='rock' && computerSelection=='scissors')||(playerSelection=='scissors' && computerSelection=='paper')||(playerSelection =='paper' && computerSelection == 'rock')){
        console.log(playerWin());
    } else if ((computerSelection == 'rock' && playerSelection == 'scissors')||(computerSelection == 'scissors' && playerSelection == 'paper')||(computerSelection == 'paper' && playerSelection == 'rock')){
        console.log(computerWin());
    } else if (computerSelection == playerSelection){
        console.log("It's a tie");
    }else{
        return "That option is unavailable"
    }
    updateResult()
}
const resultDiv = document.querySelector('#result-div')
fuction updateResult(){
    resultDiv.innerHTML =`<p>COMPUTER SCORE: ${computerScore} </p> `
    resultDiv.innerHTML +=`<p>${playerName.toUpperCase()} SCORE: ${playerScore}</p>`
}
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors= document.querySelector('#scissors')
rock.addEventListener('click',playGame(computerSelection,'rock'))
paper.addEventListener('click',playGame(computerSelection,'paper'))
scissors.addEventListener('click',playGame(computerSelection,'scissors'))