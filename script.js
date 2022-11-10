//CONSOLE VERSION (skip to line 96 for UI version);

let choices = ["Rock", "Paper", "Scissors"];
let userChoice;
let playerScore;
let computerScore;
let cancelMessage = "You clicked Cancel. Please, start again.";


function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);

    return choices[random];
};

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

function playOneRound (playerSelection, computerSelection) {
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

function game() {
    playerScore = 0;
    computerScore = 0;

    alert ("WELCOME! You'll play 5 rounds of 'Rock Paper Scissors' against the machine, with the fate of the world in line, and your weapons are, well... I think you already know. GIVE YOUR BEST and GOOD LUCK!");

    for (let i = 0; i < 5; i++) {
        playOneRound();

        if (userChoice === null) {
            alert ("Are you running off the battle? It's ok, I'll wait until you are ready to try again. SEE YA!")
            return cancelMessage;
        } else if (i < 4) {
            console.log ("You: " + playerScore + " | Computer: " + computerScore);
            console.log (" ");
        } else if (i = 4) {
            console.log ("You: " + playerScore + " | Computer: " + computerScore);
            if (playerScore === computerScore) {
                playerScore = 0;
                computerScore = 0;
                return "WOW! THE GAME ENDED IN A DRAW! DOES THAT MEAN HUMANS AND MACHINES THINK THE SAME? hmm";
            } else if (playerScore > computerScore) {
                playerScore = 0;
                computerScore = 0;
                return "CONGRATULATIONS!!! YOU WON THE BATTLE AND GRANTED OUR WORLD A TOMORROW! :D";
            } else {
                playerScore = 0;
                computerScore = 0;
                return "OH NO! YOU LOST THE BATTLE AND NOW WE'LL BECOME TOYS FOR THE MACHINES! D:";
            }
        }
    }
};


// UI VERSION

const gameButtons = document.querySelectorAll("button");
const playerChoiceIcon = document.getElementById("player-choice");
const cpuChoiceIcon = document.getElementById("cpu-choice");
const roundResult = document.getElementById("current-round")
const finalResult = document.getElementById("final-result")
const playerScoreDisplay = document.getElementById("player-score")
const cpuScoreDisplay = document.getElementById("cpu-score")
let playerChoice;
let cpuChoice;

function getCpuChoice() {
    let random = Math.floor(Math.random() * choices.length);

    if (choices[random] === "Rock") {
        cpuChoiceIcon.src= "images/rock.svg"
        cpuChoice = "Rock"
    } else if (choices[random] === "Paper") {
        cpuChoiceIcon.src= "images/paper.svg"
        cpuChoice = "Paper"
    } else if (choices[random] === "Scissors") {
        cpuChoiceIcon.src= "images/scissors.svg"
        cpuChoice = "Scissors"
    }
};

function getBothChoices() {
    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {

            if (button.id === "btnRock") {
                playerChoiceIcon.src= "images/rock.svg"
                playerChoice = "Rock"
            } else if (button.id === "btnPaper") {
                playerChoiceIcon.src= "images/paper.svg"
                playerChoice = "Paper"
            } else if (button.id === "btnScissors") {
                playerChoiceIcon.src= "images/scissors.svg"
                playerChoice = "Scissors"
            }

            getCpuChoice();
        });
    });
};

function gameRound() {
    playerScore = 0;
    computerScore = 0;

    getBothChoices();

    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {
        
            if (playerChoice === cpuChoice) {
                roundResult.textContent="It's a DRAW!";
            }  else if (playerChoice === "Rock" && cpuChoice === "Scissors") {
                roundResult.textContent="You WON this round! Rock beats Scissors!";
                playerScore++
            } else if (playerChoice === "Paper" && cpuChoice === "Rock") {
                roundResult.textContent="You WON this round! Paper beats Rock!";
                playerScore++
            } else if (playerChoice === "Scissors" && cpuChoice === "Paper") {
                roundResult.textContent="You WON this round! Scissors beats Paper!";
                playerScore++
            } else if (playerChoice === "Rock" && cpuChoice === "Paper") {
                roundResult.textContent="You LOSE this round! Paper beats Rock!";
                computerScore++
            } else if (playerChoice === "Paper" && cpuChoice === "Scissors") {
                roundResult.textContent="You LOSE this round! Scissors beats Paper!";
                computerScore++
            } else if (playerChoice === "Scissors" && cpuChoice === "Rock") {
                roundResult.textContent="You LOSE this round! Rock beats Scissors!";
                computerScore++
            };

            playerScoreDisplay.textContent = playerScore;
            cpuScoreDisplay.textContent = computerScore;
        });
    });
};

function checkWinner() {
    console.log()
};

gameRound();