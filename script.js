//CONSOLE VERSION (for UI version skip to line 96);

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
                return "WOW! THE GAME ENDED IN A DRAW! DOES THAT MEANS HUMANS AND MACHINES THINK THE SAME? hmm";
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
const finalResult = document.getElementById("final-result");
const roundDisplay = document.getElementById("round-count");
const roundResult = document.getElementById("current-round");
const playerChoiceIcon = document.getElementById("player-choice");
const cpuChoiceIcon = document.getElementById("cpu-choice");
const playerScoreDisplay = document.getElementById("player-score");
const cpuScoreDisplay = document.getElementById("cpu-score");
const restartOverlay = document.getElementById("overlay");
const restartButton = document.getElementById("restart-button")
let roundCount;
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
    };
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
            };

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
                roundResult.style.color = "grey"
                roundResult.textContent="It's a DRAW!";
            }  else if (playerChoice === "Rock" && cpuChoice === "Scissors") {
                roundResult.style.color = "blue"
                roundResult.textContent="Nice! You WON this round! Rock beats Scissors!";
                playerScore++
            } else if (playerChoice === "Paper" && cpuChoice === "Rock") {
                roundResult.style.color = "blue"
                roundResult.textContent="Yes! You WON this round! Paper beats Rock!";
                playerScore++
            } else if (playerChoice === "Scissors" && cpuChoice === "Paper") {
                roundResult.style.color = "blue"
                roundResult.textContent="Good! You WON this round! Scissors beats Paper!";
                playerScore++
            } else if (playerChoice === "Rock" && cpuChoice === "Paper") {
                roundResult.style.color = "red"
                roundResult.textContent="Oof, you LOSE this round! Paper beats Rock!";
                computerScore++
            } else if (playerChoice === "Paper" && cpuChoice === "Scissors") {
                roundResult.style.color = "red"
                roundResult.textContent="Oh no, you LOSE this round! Scissors beats Paper!";
                computerScore++
            } else if (playerChoice === "Scissors" && cpuChoice === "Rock") {
                roundResult.style.color = "red"
                roundResult.textContent="Oops, you LOSE this round! Rock beats Scissors!";
                computerScore++
            };

            playerScoreDisplay.textContent = playerScore;
            cpuScoreDisplay.textContent = computerScore;
        });
    });
};

function checkWinner() {
    roundCount = 0;
    gameRound();
    gameButtons.forEach((button) => {
        button.addEventListener("click", () => {
            roundCount++
            roundDisplay.textContent = roundCount + "º ROUND"
            if (playerScore === 5) {
                    finalResult.textContent="CONGRATULATIONS!!! YOU WON AND THANKS TO YOU WE'LL LIVE ANOTHER DAY!";
                    restartOverlay.style.display = "flex"
                } else if (computerScore === 5) {
                    finalResult.textContent="YOU LOST... OH MY, I WONDER WHAT WILL HAPPEN WITH US NOW...";
                    restartOverlay.style.display = "flex"
                }
        });
    });
};


restartButton.addEventListener("click", () => {
    playerScore = 0
    computerScore = 0
    roundCount = 0
    finalResult.textContent = "";
    roundDisplay.textContent = ""
    roundResult.textContent = "You need to score 5 points to defeat the machine and save the world! Good Luck!"
    roundResult.style.color = ""
    playerChoiceIcon.src= "images/question-mark.svg"
    cpuChoiceIcon.src= "images/question-mark.svg"
    playerScoreDisplay.textContent = playerScore;
    cpuScoreDisplay.textContent = computerScore;
    restartOverlay.style.display = "none";
});

checkWinner();