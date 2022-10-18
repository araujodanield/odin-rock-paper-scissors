let choices = ["Rock", "Paper", "Scissors"];

//Computer random choice
function getComputerChoice () {
    let random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

let resetCompare; //reset for the `comparePlayerChoice` function in case of invalid input

//Compare the user input with the `choices` array
function comparePlayerChoice () {
    let userChoice = prompt("Choose your weapon:");
    
    if (userChoice.toLowerCase() === choices[0].toLowerCase() || userChoice.toLowerCase() === choices[1].toLowerCase() || userChoice.toLowerCase() === choices[2].toLowerCase()) {
        return userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
    } else {
        alert ('Invalid value! Please write: "Rock", "Paper" or "Scissors"!');
        resetCompare = comparePlayerChoice();
        return resetCompare;
    }
}

//play a single round
function playRound (playerSelection, computerSelection) {
    playerSelection = comparePlayerChoice();
    computerSelection = getComputerChoice();

    let result = "You choose " + playerSelection + ", Computer choose " + computerSelection;

    console.log (result);
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "It's a DRAW!";
    }  else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You WON this round! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You WON this round! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You WON this round! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You LOSE this round! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You LOSE this round! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You LOSE this round! Rock beats Scissors!";
    }
}