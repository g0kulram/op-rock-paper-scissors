console.log("Hello!!! Welcome to RCP!");

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

