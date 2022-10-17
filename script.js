let choices = ["Rock", "Paper", "Scissors"];

//computer random choice
function getComputerChoice () {
    let random = Math.floor(Math.random() * choices.length);

    return choices[random];
}

//compare the user input with the choices array
function comparePlayerChoice () {
    let userChoice = prompt("Choose your weapon:");

    if (userChoice.toLowerCase() === choices[0].toLowerCase() || userChoice.toLowerCase() === choices[1].toLowerCase() || userChoice.toLowerCase() === choices[2].toLowerCase()) {
        return userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
    } else {
        alert ('Invalid value! The options are: "Rock", "Paper" or "Scissors"!');
    }
}

//play a single round
function playRound (playerSelection, computerSelection) {
    playerSelection = comparePlayerChoice();
    computerSelection = getComputerChoice();

    let result = "You choose " + playerSelection + ", and computer choose " + computerSelection;

    console.log (result);
    
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        alert ("EMPATE!");
    }  else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        alert ("VOCÊ GANHOU! PEDRA GANHA DE TESOURA!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        alert ("VOCÊ GANHOU! PAPEU GANHA DE PEDRA!");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        alert ("VOCÊ GANHOU! TESOURA GANHA DE PAPEL!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        alert ("VOCÊ PERDEU! PAPEU GANHA DE PEDRA!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        alert ("VOCÊ PERDEU! TESOURA GANHA DE PAPEL!");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        alert ("VOCÊ PERDEU! PEDRA GANHA DE TESOURA!");
    }
}

//THINGS TO DO:
//DESCOBRIR COMO FAZER O PROMPT RESETAR CASO O VALOR SEJA INVALIDO