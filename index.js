
const options = ["rock", "paper", "scissors"];
 function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
 }

 function getHumanChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper, Scissors");
        if(choice == null){
            continue;
        }
        const  choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
 }

 function checkWinner(humanSelection, computerSelection){
    if(humanSelection == computerSelection){
        return 'Tie';
    }
    else if(
        (humanSelection == "rock" && computerSelection == "scissors" ) ||
        (humanSelection == "scissors" && computerSelection == "paper") ||
        (humanSelection == "paper" && computerSelection == "rock")
        ){
            return "Human";
        }
        else{
            return "Computer";
        }
 }

 function playRound(humanSelection, computerSelection){


    const result = checkWinner(humanSelection, computerSelection);
    if(result == "Tie"){
        return "It is a tie";
    }
    else if (result == "Human"){

        return `You Win! ${humanSelection} beats ${computerSelection}`
    }
    else{
        return `You Lost! ${computerSelection} beats ${humanSelection}`
    }

 }

 function playGame(){
    let humanScore = 0; 
    let computerScore = 0;
    console.log("Welcome")
    for(let i = 0; i < 5 ; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("____________-");
        if(checkWinner(humanSelection, computerSelection) == "Human"){
            humanScore++;
        }else if (checkWinner(humanSelection, computerSelection) == "Computer"){
            computerScore++;
        }
    }
    console.log("Game OVer")
    if(humanScore > computerScore){
        console.log("Human was the winner");
    }
    else if (humanScore < computerScore){
        console.log("Computer was the winner")
    }
    else {
        console.log("It is a Tie")
    }

 }
playGame();




