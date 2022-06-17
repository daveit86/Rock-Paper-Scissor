const rounds=5;
let i=0;
function playRound(playerSelection, computerSelection){
    console.log(`Player - ${playerSelection} VS CPU - ${computerSelection}`);
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    switch(playerSelection){
        case 'rock': case 'r':
            {
                i++;
                switch(computerSelection){
                    case 'rock':
                        return "It's a tie!";
                    break;
                    case 'paper':
                        return "You lost, Paper beats Rock!";
                    break;
                    case 'scissors':
                        return "You won, Rock beats Scissor";
                }
            }
        break;
        case 'paper': case 'p':
            {
                i++;
                switch(computerSelection){
                    case 'rock':
                        return "You won, Paper beats Rock!";
                    break;
                    case 'paper':
                        return "It's a tie!";
                    break;
                    case 'scissors':
                        return "You lost, Scissors beat Paper";
                }
            }
        break;
        case 'scissors': case 's':
            {
                i++;
                switch(computerSelection){
                    case 'rock':
                        return "You lost, Rock beats Scissors!";
                    break;
                    case 'paper':
                        return "You won, Scissors beat Paper";
                    break;
                    case 'scissors':
                        return "It's a tie!";
                }
            }
        break;
        default: return "invalid option! Try again";
    }
}

function computerPlay(){
    let choises=["rock", "paper", "scissors"];
    return choises[Math.floor(Math.random()*3)];
}

function game()
{
    while(i<rounds)
    {
        console.log(`Round ${i+1}`);
        let choise=prompt("(R)ock, (P)aper or (S)cissors?");
        if(choise=='r'){choise="rock";}
        if(choise=='p'){choise="paper";}
        if(choise=='s'){choise="scissors";}
        console.log(playRound(choise,computerPlay()));
    }
}

game();