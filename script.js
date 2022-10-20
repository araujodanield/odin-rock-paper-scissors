let choices = ["Rock", "Paper", "Scissors"];
let userChoice;
let playerScore;
let computerScore;
let cancelMessage = "You clicked Cancel. Please, start again.";


//Computer random choice;
function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);

    return choices[random];
};

//Compare the user input with the 'choices' array;
function compareUserChoice() {
    userChoice = prompt("Choose your weapon:");
    
    if (userChoice === null) {
        return cancelMessage;
    } else if (userChoice.toLowerCase() === choices[0].toLowerCase() || userChoice.toLowerCase() === choices[1].toLowerCase() || userChoice.toLowerCase() === choices[2].toLowerCase()) {
        return userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
    } else {
        alert ("OOPS, I didn't understand what you said. Please choose again between Rock, Paper, or Scissors!");
        return compareUserChoice();
    };
};


//Play a single round;
function playRound (playerSelection, computerSelection) {
    playerSelection = compareUserChoice();
    computerSelection = getComputerChoice();

    let result = "You choose: " + playerSelection + " | Computer choose: " + computerSelection;
    
    if (userChoice === null) {
        return cancelMessage;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log (result);
        console.log ("It's a DRAW!");
    }  else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        console.log (result);
        console.log ("You WON this round! Rock beats Scissors!");
        playerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        console.log (result);
        console.log ("You WON this round! Paper beats Rock!");
        playerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        console.log (result);
        console.log ("You WON this round! Scissors beats Paper!");
        playerScore++;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        console.log (result);
        console.log ("You LOSE this round! Paper beats Rock!");
        computerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        console.log (result);
        console.log ("You LOSE this round! Scissors beats Paper!");
        computerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        console.log (result);
        console.log ("You LOSE this round! Rock beats Scissors!");
        computerScore++;
    };
};

//Five rounds game;
function game() {
    playerScore = 0;
    computerScore = 0;

    alert ("WELCOME! You'll play 5 rounds of 'Rock Paper Scissors' against the machine, with the fate of the world in line, and your weapons are, well... I think you already know. GIVE YOUR BEST and GOOD LUCK!");

    for (let i = 0; i < 5; i++) {
        playRound();

        if (userChoice === null) {
            alert ("Are you running off the battle? It's ok, I'll wait until you are ready to try again. SEE YA!")
            return cancelMessage;
        } else if (i < 4) {
            console.log ("You: " + playerScore + " | Computer: " + computerScore);
            console.log (" ");
        } else if (i = 4) {
            console.log ("You: " + playerScore + " | Computer: " + computerScore);
            if (playerScore === computerScore) {
                return "WOW! THE GAME ENDED IN A DRAW! DOES THAT MEAN HUMANS AND MACHINES THINK THE SAME? hmm";
            } else if (playerScore > computerScore) {
                return "CONGRATULATIONS!!! YOU WON THE BATTLE AND GRANTED OUR WORLD A TOMORROW! :D";
            } else {
                return "OH NO! YOU LOST THE BATTLE AND NOW WE'LL BECOME TOYS FOR THE MACHINES! D:";
            }
        }
    }
}