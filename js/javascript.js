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
    

    // if(humanChoice===0){
    //     return "rock";
    // }
    // else if(humanChoice===2){
    //     return "scissors";
    // }
    // else if (humanChoice===5){
    //     return "paper";
    // }
    // else{
    //     return getHumanChoice();
    // }
    return humanChoice;
}
// intialize score to 0
let humanScore = 0;
let computerScore =0;
function playRound(humanInput,computerInput){
    if(humanInput ==="rock"){
        if(computerInput ==="rock"){
            return {
                humanScore: humanScore,
                computerScore: computerScore
            };
        }
        else if(computerInput ==="paper"){
            return {
                humanScore: humanScore,
                computerScore: ++computerScore
            };
        }
        else{
            return {
                humanScore: ++humanScore,
                computerScore: computerScore
            };
        }
    }

    if(humanInput ==="scissors"){
        if(computerInput ==="rock"){
            return {
                humanScore: humanScore,
                computerScore: ++computerScore
            };
        }
        else if(computerInput ==="paper"){
            return {
                humanScore: ++humanScore,
                computerScore: computerScore
            };
        }
        else{
            return {
                humanScore: humanScore,
                computerScore: computerScore
            };
        }
    }
    
    if(humanInput ==="paper"){
        if(computerInput ==="rock"){
            return {
                humanScore: ++humanScore,
                computerScore: computerScore
            };
        }
         
        else if(computerInput ==="paper"){
            return {
                humanScore : humanScore,
                computerScore: computerScore

            };
        }
        else{
            return {
                humanScore: humanScore,
                computerScore: ++computerScore
            };
        }
    }
    
    console.log(humanScore)
    console.log(computerScore)
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection,computerSelection ))

