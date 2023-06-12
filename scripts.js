



function getComputerChoice(){
    let num = Math.floor(Math.random()*3)+1;
    let result = "";
    switch(num){
        case 1:
            result="rock"
            break;
        case 2:
            result="paper"
            break;
        case 3:
            result="scissors"
            break;
    }
        return result;
}

function playRound(playerSelection, computerSelection){

}

function game(){

}


//Get Player Choice
let playerChoice = prompt("Enter your choice:").toLowerCase();
//Randomly generate computer Choice
let computerChoice = getComputerChoice();
//Start game of 5 rounds












//Desplay values for development

console.log(playerChoice);
console.log(computerChoice);
