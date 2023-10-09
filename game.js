const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const you = document.getElementById('you');
const comp = document.getElementById('comp');
const hands = document.getElementById('icons');

const myHand1 = document.getElementById('myHand');
const logo = document.querySelectorAll(".logo")

const options = [
    './assets/rock-hand.png', 
    './assets/paper-hand.png',
    './assets/scissors-hand.png'
];

const score = document.getElementById('score');
const ScorePlayer1 = document.getElementById('me');
const ScorePlayer2 = document.getElementById('player2');



var playAgain = document.getElementById('play-again');
var gameOverTxt = document.getElementById('game-over'); 


var compChoice=""
var scoreComp = 0;
var scoreYou = 0;

function compChoices () {
    operator = Math.round(Math.floor(Math.random()*3));
    if(operator===0){
        compChoice="rock"
    }else if (operator === 1) {
        compChoice = "paper"
    }

    else if (operator === 2) {
        compChoice = "scissors"
    } 
    comp.innerHTML=`<img src="${options[operator]}" alt="">`
}
operator = Math.round(Math.floor(Math.random()*3));
comp.innerHTML=`<img src="${options[operator]}" alt="">`



var playerChoice =""
logo.forEach((logo) => {
    logo.onclick=(i)=> {
        if(i.target.matches("img")) {
            console.log(i.target.id)
            myHand1.src= "./assets/"+(i.target.id)+"-hand.png";
            if(i.target.id === "rock") {
                playerChoice="rock";
            }
            else if (i.target.id === "paper") {
                playerChoice="paper";
            }
            else if (i.target.id === "scissors") {
                playerChoice= "scissors";
            }
            
        }
        compChoices()
        if (playerChoice==="paper"){
          
            if (compChoice==="rock"){
                scoreYou++;
                console.log(scoreYou)
                ScorePlayer1.innerText=scoreYou;
            }


            else if (compChoice === "scissors") {
                scoreComp++
                console.log(scoreComp)
                ScorePlayer2.innerText=scoreComp
            }
    


        } else if (playerChoice==="rock"){
            
            if (compChoice === "scissors"){
                scoreYou++
                console.log(scoreYou)
                ScorePlayer1.innerText=scoreYou;
            }
            else if (compChoice === "paper") {
                scoreComp++
                console.log(scoreComp)
                ScorePlayer2.innerText=scoreComp
            }


        } else if (playerChoice==="scissors") {
          
            if (compChoice === "paper") {
                scoreYou++
                console.log(scoreYou)
                ScorePlayer1.innerText=scoreYou;
            }
            else if (compChoice==="rock") {
                scoreComp++
                console.log(scoreComp)
                ScorePlayer2.innerText=scoreComp
            }
        }


        if (scoreYou === 5 || scoreComp === 5) {
            var winner = scoreYou === 5 ? 'You won the game!' : 'Computer won the game!';
            
            gameOverTxt.style.visibility= "visible" ;
            rock.style.visibility = 'hidden';
            paper.style.visibility = 'hidden';
            scissors.style.visibility = 'hidden';
        


            gameOverTxt.innerHTML = winner;
            console.log(winner);
            playAgain.style.visibility = 'visible';
            playAgain.onclick = function () {
                location.reload();
            };
           


        }
    }
})
    



  