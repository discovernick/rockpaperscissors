function getcomputerChoice() {
    let val = Math.random();
    let ret = (val <= 1 / 3) ? "rock" : (val <= 2 / 3) ? "paper" : "scissors";
    return ret;
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return "draw";
    } else if (computerChoice == "rock" && playerChoice == "scissors") {
        return "comp";
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        return "player";
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        return "player";
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        return "comp";
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        return "comp";
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        return "player";
    };
}

let player = 0;
let computer = 0;
function game(playerChoice) {
    // Get Computer Score
    let computerChoice = getcomputerChoice();
    // Update HTML
    document.getElementById("playerChoice").innerHTML = playerChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;
    // Determine Winner 
    let ret = playRound(computerChoice, playerChoice);
    console.log(computerChoice, playerChoice, ret)
    document.getElementById("result").innerHTML = ret;
    // Update Count
    if (ret == "player") {
        player++;
        document.getElementById("playerScore").innerHTML = player;
    } else if (ret == "comp") {
        computer++;
        document.getElementById("compScore").innerHTML = computer;
    }
    return ret;
}


function round() {
    while (true) {
        let result = game();
        if (result == "player") {
            player++;
        } else if (result == "comp") {
            computer++;
        }
        if (player == 5) {
            console.log(`Player Wins: ${player} to ${computer}`)
            return;
        } else if (computer == 5) {
            console.log(`Computer Wins: ${computer} to ${player}`)
            return;
        }
    }
}


const reset = document.querySelector(".btn1")
reset.addEventListener('click', () => {
    player = 0;
    document.getElementById("playerScore").innerHTML = player;
    computer = 0;
    document.getElementById("compScore").innerHTML = computer;
});