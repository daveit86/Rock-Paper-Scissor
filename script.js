const rounds=5;
let i=0;
const player_play=document.querySelector("#versus .player");
const cpu_play=document.querySelector("#versus .cpu");
const player_score=document.querySelector("#score .player");
const cpu_score=document.querySelector("#score .cpu");
const round_box=document.querySelector("#score .round");
round_box.innerHTML="R1";
cpu_score.innerHTML="0";
player_score.innerHTML="0";
let cpu={
    'rock': 'pics/RockR.png',
    'paper': 'pics/PaperR.png',
    'scissors': 'pics/ScissorsR.png'
}
let player={
    'rock': 'pics/RockL.png',
    'paper': 'pics/PaperL.png',
    'scissors': 'pics/ScissorsL.png'
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

//game();

let buttons=document.querySelectorAll(".button");
for(k=0;k<buttons.length;k++)
{
    buttons[k].onclick = function(){

        //Get player choise and put image in player box
        console.log("button pressed!");
        let image=document.createElement("img");
        let cpu_image=document.createElement("img");
        let player_choise=this.getAttribute("name");
        console.log(`Selected ${player_choise}`);
        image.src=player[player_choise];
        player_play.innerHTML="";
        player_play.appendChild(image);

        //get CPU choise and put image in cpu box
        let cpu_choise=computerPlay();
        cpu_image.src=player[cpu_choise];
        cpu_play.innerHTML="";
        cpu_play.appendChild(cpu_image);

        console.log(`Player - ${player_choise} VS CPU - ${cpu_choise}`);
        
        switch(player_choise){
            case 'rock':
                {
                    i++;
                    switch(cpu_choise){
                        case 'rock':
                            console.log("It's a tie!");
                        break;
                        case 'paper':
                            console.log("You lost, Paper beats Rock!");
                            cpu_score.innerHTML=parseInt(cpu_score.innerHTML)+1;
                        break;
                        case 'scissors':
                            console.log("You won, Rock beats Scissor");
                            player_score.innerHTML=parseInt(player_score.innerHTML)+1;
                    }
                }
            break;
            case 'paper':
                {
                    i++;
                    switch(cpu_choise){
                        case 'rock':
                            console.log( "You won, Paper beats Rock!");
                            player_score.innerHTML=parseInt(player_score.innerHTML)+1;
                        break;
                        case 'paper':
                            console.log( "It's a tie!");
                        break;
                        case 'scissors':
                            console.log( "You lost, Scissors beat Paper");
                            cpu_score.innerHTML=parseInt(cpu_score.innerHTML)+1;
                    }
                }
            break;
            case 'scissors':
                {
                    i++;
                    switch(cpu_choise){
                        case 'rock':
                            console.log( "You lost, Rock beats Scissors!");
                            cpu_score.innerHTML=parseInt(cpu_score.innerHTML)+1;
                        break;
                        case 'paper':
                            console.log( "You won, Scissors beat Paper");
                            player_score.innerHTML=parseInt(player_score.innerHTML)+1;
                        break;
                        case 'scissors':
                            console.log( "It's a tie!");
                    }
                }
            break;
            default: return "invalid option! Try again";
        }


        // check if it was the last round
        if(i==rounds)
        {
            score_difference=parseInt(player_score.innerHTML)-parseInt(cpu_score.innerHTML);
            switch(true){
                case (score_difference>0):
                    alert("You won!");
                    break;
                case (score_difference<0):
                    alert("You lost!");
                    break;
                case (score_difference==0):
                    alert("it's a tie!");
                    break;
                default:
                    alert("Unexpected result!");
            }
            player_score.innerHTML="0";
            cpu_score.innerHTML="0";
            round_box.innerHTML="R1";
            i=0;
        }
        else{
            //Update Round
            round_box.innerHTML="R"+(i+1);
        }
    }
}