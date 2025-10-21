console.log("Hello!!! Welcome to RCP!");

//humanScore to track number of user's win
let humanScore = 0;
//computerScore to track number of computer's win
let computerScore = 0;

//returns rock, paper or scissors randomly
function getComputerChoice() {
    const result = Math.random();

    if(result >= 0 && result < (1/3)) { // in the range 0 <= result < 1/3
        return("rock");
    } else if(result >= (1/3) && result < (2/3)) { // in the range of 1/3 <= result < 2/3
        return("paper");
    } else { // in the range of 2/3 <= result <= 1(or 3/3)
        return("scissors");
    }
}

//prompts user for their choice and returns the user input
function getHumanChoice() {
    const choice = prompt("Rock, Paper, or Scissors?");

    return choice;
}
