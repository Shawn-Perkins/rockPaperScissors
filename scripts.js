

game();



function getPlayerChoice(){
    let choice = prompt("Enter your choice:").toLowerCase();
    if(choice == "1"){choice = "rock"}
    if(choice == "2"){choice = "paper"}
    if(choice == "3"){choice = "scissors"}
    return choice;
}


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

    switch(playerSelection){
        case "rock":
        case "1":
            if (computerSelection == "rock"){
                return "Tie";
            }else if (computerSelection == "paper"){
                return "Lose";
            }else if (computerSelection == "scissors"){
                return "Win";
            }
            break;
        case "paper":
        case "2":
            if (computerSelection == "rock"){
                return "Win";
            }else if (computerSelection == "paper"){
                return "Tie";
            }else if (computerSelection == "scissors"){
                return "Lose";
            }
            break;
        case "scissors":
        case "3":
            if (computerSelection == "rock"){
                return "Lose";
            }else if (computerSelection == "paper"){
                return "Win";
            }else if (computerSelection == "scissors"){
                return "Tie";
            }         
            break;
        default:
            return "input error";
    }
}

function game(){

    let rounds = parseInt(prompt("Play How Many Rounds?"));
    let playerWins = 0;
    let computerWins = 0;
    let gamesPlayed = 0;

    for (let i=0; i < rounds; i++){        
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result == "Win"){++playerWins}
        if (result == "Lose"){++computerWins}
        ++gamesPlayed;


        let gameMessage = "You chose: " + playerSelection + ", Computer chose: " + computerSelection + ", Result: " + result;
        let scoreMessage = "Score: Player: " + playerWins + " Computer: " + computerWins;
        
        console.log(gameMessage);
        console.log(scoreMessage);
    }
}
