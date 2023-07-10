const choices = ["rock", "paper", "scissor"]

// User choice
function getPlayerChoice() {
    // Validate playerSelection
    isInChoices = false
    do {
        var answer = prompt("Please enter your choice (rock/paper/scissor): ").toLowerCase();
        if(choices.includes(answer)) {
           isInChoices = true; 
        } else {
            console.log("Please enter a valid choice.")
        }
    } while(!isInChoices)

    return answer
}

// Computer choice
function getComputerChoice(choices) {
    return choices[Math.floor((Math.random() * choices.length))];
}

// Compare Selection
function playRound() {
    
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice(choices);





    

// Computer Choice


// Round Function


// Game Function