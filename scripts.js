

//game();



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



const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", e => {
    playGame("rock");
});



const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", e => {
    playGame("paper");
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", e => {
    playGame("scissors");
});



function playGame(playerChoice){

    
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    compChoice.textContent = computerChoice;
    compPlay.appendChild(compChoice);


if(result == "Win"){
    ++playerScore;
}else if(result == "Lose"){
    ++compScore;
}else ( ++tieScore);

playScoreDiv.textContent = playerScore;
playScore.appendChild(playScoreDiv);

comScoreDiv.textContent = compScore;
comScore.appendChild(comScoreDiv);

tieScoreDiv.textContent = tieScore;
tieScore1.appendChild(tieScoreDiv);


    resultDiv.textContent = result;
    result1.appendChild(resultDiv);
    // content.textContent = result;
    // container.appendChild(content);
    // //alert(result);co
}



// const container = document.querySelector('#container');
// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);


//<div class="compPlay">

const compPlay = document.querySelector('.compPlay');
const compChoice = document.createElement('div');
compChoice.textContent = ' ';
compPlay.appendChild(compChoice);

//<div class="result">

const result1 = document.querySelector('.result');
const resultDiv = document.createElement('div');
resultDiv.textContent = ' ';
result1.appendChild(resultDiv);

let playerScore = 0;
let compScore = 0;
let tieScore = 0;


//<div class="playerScore">

const playScore = document.querySelector('.playerScore');
const playScoreDiv = document.createElement('div');
playScoreDiv.textContent = '0';
playScore.appendChild(playScoreDiv);



//<div class="computerScore">

const comScore = document.querySelector('.computerScore');
const comScoreDiv = document.createElement('div');
comScoreDiv.textContent = '0';
comScore.appendChild(comScoreDiv);


//<div class="tieScore">

const tieScore1 = document.querySelector('.tieScore');
const tieScoreDiv = document.createElement('div');
tieScoreDiv.textContent = '0';
tieScore1.appendChild(tieScoreDiv);
   


const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", e => {
    
    compChoice.textContent = " ";
    compPlay.appendChild(compChoice);

    playScoreDiv.textContent = 0;
    playScore.appendChild(playScoreDiv);
    
    comScoreDiv.textContent = 0;
    comScore.appendChild(comScoreDiv);
    
    tieScoreDiv.textContent = 0;
    tieScore1.appendChild(tieScoreDiv);
    
    
        resultDiv.textContent = " ";
        result1.appendChild(resultDiv);


});