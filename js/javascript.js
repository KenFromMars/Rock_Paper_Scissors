function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*6);
    if(computerChoice===0){
        return "rock";
    }
    else if(computerChoice===2){
        return "scissors";
    }
    else if (computerChoice===5){
        return "paper";
    }
    else{
        return getComputerChoice();
    }
}
// getting number from user

function getHumanChoice(){
    let humanChoice = prompt("enter your choice (rock,paper,scissors").toLowerCase();

    return humanChoice;
}
// intialize score to 0
let humanScore = 0;
let computerScore =0;
function playRound(humanInput,computerInput){
    if(humanInput===computerInput){
        console.log(`TRY AGAIN! ${humanInput} CAN'T BEAT ${computerInput}.`)
        return {
            humanScore: humanScore,
            computerScore: computerScore
        };
    }
    else if (humanInput==="rock" && computerInput ==="scissors" ||
             humanInput==="scissors" && computerInput ==="paper" ||
             humanInput ==="paper" && computerInput ==="rock" ){
                console.log(`YEAH YOU GOT IT! ${humanInput} BEATS ${computerInput}.`)
                return {
                    humanScore: ++humanScore,
                    computerScore: computerScore
                };
    }
    else {
        console.log(`YOU MISSED! ${computerInput} BEATS ${humanInput}.`)
        return {
            
            humanScore: humanScore,
            computerScore: ++computerScore
        };
    }
    
}
function playGame(){
    for(i=1;i<=5;i++){
        playRound(getHumanChoice(),getComputerChoice() );
    }
    if(humanScore > computerScore){
        console.log(`YOU WIN! ${humanScore}:${computerScore}`)
    }
    else if(computerScore>humanScore) {
        console.log(`COMPUTER WINS!"${computerScore}:${humanScore}`)
    }
    else {
        console.log(`TIE!"${computerScore}:${humanScore}`)
    }
    return {
        humanScore: humanScore,
        computerScore: computerScore
    };

}


console.log(playGame())
