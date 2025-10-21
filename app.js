console.log("Hello!!! Welcome to RCP!");

//humanScore to track number of user's win
let humanScore = 0;
//computerScore to track number of computer's win
let computerScore = 0;

//returns rock, paper or scissors randomly
function getComputerChoice() {
    const result = Math.random();

    if (result >= 0 && result < (1 / 3)) { // in the range 0 <= result < 1/3
        return ("rock");
    } else if (result >= (1 / 3) && result < (2 / 3)) { // in the range of 1/3 <= result < 2/3
        return ("paper");
    } else { // in the range of 2/3 <= result <= 1(or 3/3)
        return ("scissors");
    }
}

//prompts user for their choice and returns the user input
function getHumanChoice() {
    const choice = prompt("Rock, Paper, or Scissors?");
    let lowercasedChoice = choice.toLowerCase();
    return lowercasedChoice;
}

//plays a round of RCP by prompting the user and then calling the computer choice
//prints the result of the round in the console
//and increments the humanScore or computerScore based on the result
function playRound(humanChoice, computerChoice) {
    //if human choice and computer choice is the same, it's a draw
    if (humanChoice === computerChoice) {
        console.log(`It's a ${humanChoice} draw!`);
        return;
    }

    switch (humanChoice) {
        //if human choice is "rock" and computer choice is "paper", computer victory,
        //else human victory
        case "rock":
            if (computerChoice === "paper") {
                computerScore++;
                console.log("You lose! Paper beats Rock.")
            } else {
                humanScore++;
                console.log("You win! Rock beats Scissors.");
            }
            break;

        //if human choice is "paper" and computer choice is "scissors", computer victory,
        //else human victory
        case "paper":
            if (computerChoice === "scissors") {
                computerScore++;
                console.log("You lose! Scissors beats Paper.")
            } else {
                humanScore++;
                console.log("You win! Paper beats Rock.");
            }
            break;

        //if human choice is "scissors" and computer choice is "rock", computer victory,
        //else human victory
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
                console.log("You lose! Rock beats Scissors.")
            } else {
                humanScore++;
                console.log("You win! Scissors beats Paper.");
            }
            break;
    }
}

//play 5 rounds

let currentRound = 1;//keeps track of the number of rounds

//looping to play the rounds until 5
while(currentRound <= 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    currentRound++;
}

//print the results
console.log(`Your Victory: ${humanScore}    ||    Computer Victory:${computerScore}`);
if(humanScore > computerScore) {
    console.log("VICTORY!");
} else if(computerScore > humanScore) {
    console.log("DEFEAT!");
} else {
    console.log("Would you look at it? It's a draw!");
}
