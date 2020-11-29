
// Declare starting player score when beginning a game
let myScore = 0;

// Declare starting computer score when beginning a game
let enemyScore = 0;

// Declare computer weapon choices
let enemyChoices = ["rock", "paper", "scissors"];

// Randomize computer weapon choices 
function randomizeChoices() {
    return enemyChoices[Math.floor(Math.random()*enemyChoices.length)];
}
// All possible matchup scenarios with point allocations
function playRound(playerSelection, enemySelection) {
    if (playerSelection === "rock" && enemySelection === "scissors") {
        myScore++;
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "rock" && enemySelection === "paper") {
        enemyScore++;
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection === "paper" && enemySelection === "scissors") {
        enemyScore++;
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection === "paper" && enemySelection === "rock") {
        myScore++;
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "scissors" && enemySelection === "paper") {
        myScore++;
        return "You Win! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && enemySelection === "rock") {
        enemyScore++;
        return "You Lose! Rock beats Scissors!";
    } else {
        myScore;
        enemyScore;
        return "You Tie! Equal weapons!";
    }}
// Describes all game endings after comparing score totals
function declareWinner() {
    if (myScore === 5) {
        return "You win this game! Good job!";
    } else if (enemyScore === 5) {
        return "Game over! Better luck next time!";
    } else {
        return "";
    }}

// Plays one round of Rock Paper Scissors
function playGame() {        
    const enemySelection = randomizeChoices();
    console.log(playRound(playerSelection, enemySelection));
    console.log(declareWinner());
    if (myScore === 5 || enemyScore === 5) {
        document.getElementById("rock").removeEventListener("click", playGame, false);
        document.getElementById("paper").removeEventListener("click", playGame, false);
        document.getElementById("scissors").removeEventListener("click", playGame, false);
    }
}   
// Allow player to play one round by clicking one of three buttons
document.getElementById("rock").onclick = function(e) {
    playerSelection = "rock";}
document.getElementById("rock").addEventListener("click", playGame, false);
document.getElementById("rock").addEventListener("click", resetGame, false);
document.getElementById("rock").addEventListener("click", playerCount, false);
document.getElementById("rock").addEventListener("click", enemyCount, false);

document.getElementById("paper").onclick = function(e) {
    playerSelection = "paper";}
document.getElementById("paper").addEventListener("click", playGame, false);
document.getElementById("paper").addEventListener("click", resetGame, false);
document.getElementById("paper").addEventListener("click", playerCount, false);
document.getElementById("paper").addEventListener("click", enemyCount, false);

document.getElementById("scissors").onclick = function(e) {
    playerSelection = "scissors";}
document.getElementById("scissors").addEventListener("click", playGame, false);
document.getElementById("scissors").addEventListener("click", resetGame, false);
document.getElementById("scissors").addEventListener("click", playerCount, false);
document.getElementById("scissors").addEventListener("click", enemyCount, false);

// Updates player score as the game progresses
let playerNumber = document.createElement("h1");
let playerScore = document.createTextNode(myScore);
playerNumber.appendChild(playerScore);
document.getElementById("playerScore").appendChild(playerScore);
function playerCount() {
    return document.getElementById("playerScore").innerHTML = myScore;
}

// Updates enemy score as the game progresses
let enemyNumber = document.createElement("h1");
let computerScore = document.createTextNode(enemyScore);
enemyNumber.appendChild(computerScore);
document.getElementById("enemyScore").appendChild(computerScore);
function enemyCount() {
    return document.getElementById("enemyScore").innerHTML = enemyScore;
}

// Displays round results 
window.console = {
    log: function(str) {
        let results = document.createElement("div");
        results.appendChild(document.createTextNode(str));
        document.getElementById("resultsLog").appendChild(results);
    }
}

// Reset the game after five points are reached
let againButton = document.createElement("button");
againButton.setAttribute('id', 'resetGame');
let againText = document.createTextNode("Play Again!");
againButton.appendChild(againText);
function resetGame() {
    if (myScore === 5 || enemyScore === 5) {
        return document.getElementById("resetButton").appendChild(againButton);
        
    }
}
function refresh() {
    window.location.reload(false);
}
document.getElementById("resetButton").addEventListener("click", refresh, false);

// Button press animation
const buttonR = document.getElementById("rock");
const buttonP = document.getElementById("paper");
const buttonS = document.getElementById("scissors");

function playAnimation() {
    this.classList.add("clicking");
}

function removeTransition() {
    this.classList.remove("clicking")
}

buttonR.addEventListener("click", playAnimation);
buttonP.addEventListener("click", playAnimation);
buttonS.addEventListener("click", playAnimation);

buttonR.addEventListener("transitionend", removeTransition);
buttonP.addEventListener("transitionend", removeTransition);
buttonS.addEventListener("transitionend", removeTransition);

//"Play again" button press animation
againButton.addEventListener("click", playAnimation);
againButton.addEventListener("transitionend", removeTransition);
