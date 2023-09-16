const rockButton= document.querySelector('.rock');
const paperButton= document.querySelector('.paper');
const scissorsButton= document.querySelector('.scissors');
const scoreText= document.querySelector('.score');
const yourSelection= document.querySelector('#your-selection');
const computerSelection= document.querySelector('#computer-selection');
const resetButton= document.querySelector('#reset-score');
const choiceText= document.querySelector('.choice-text');

let randomNumber=Math.floor((Math.random()*3) +1);
let playerChoice;
let computerChoice;
let score=0;

function computer(){
    let randomNumber=Math.floor((Math.random()*3) +1);
        if(randomNumber==1){
            computerSelection.textContent= 'Computer: Rock';
            computerChoice= 'Rock';
        }else if(randomNumber==2){
            computerSelection.textContent= 'Computer: Paper';
            computerChoice= 'Paper';
        }else{
            computerSelection.textContent= 'Computer: Scissors';
            computerChoice= 'Scissors';
        }
}

rockButton.addEventListener('click', function(){
    playerChoice='Rock';
    yourSelection.textContent='You: Rock';
    computer();
    scoreTracker();
})

paperButton.addEventListener('click', function(){
    playerChoice='Paper';
    yourSelection.textContent='You: Paper';
    computer();
    scoreTracker();
})

scissorsButton.addEventListener('click', function(){
    playerChoice='Scissors';
    yourSelection.textContent='You: Scissors';
    computer();
    scoreTracker();
})

function scoreTracker(){
    if (playerChoice=='Rock' && computerChoice=='Paper'){
       choiceText.textContent='You chose Rock and Computer chose Paper. Computer wins!';

    }else if(playerChoice=='Rock' && computerChoice== 'Scissors'){
        choiceText.textContent='You chose Rock and Computer chose Scissors. You win!';
        youWin();

    }else if(playerChoice=='Paper' && computerChoice== 'Scissors'){
        choiceText.textContent='You chose Paper and Computer chose Scissors. Computer wins!';

    }else if(playerChoice=='Paper' && computerChoice== 'Rock'){
        choiceText.textContent='You chose Paper and Computer chose Rock. You win!';
        youWin();

    }else if(playerChoice=='Scissors' && computerChoice== 'Rock'){
        choiceText.textContent='You chose Scissors and Computer chose Rock. Computer wins!';

    }else if(playerChoice=='Scissors' && computerChoice== 'Paper'){
        choiceText.textContent='You chose Scissors and Computer chose Paper. You win!';
        youWin();

    }else if (playerChoice===computerChoice){
        choiceText.textContent= `You both chose ${playerChoice}. It's a draw.`
    }        
}

function youWin(){
    score+=1;
    scoreText.textContent=`Total Score: ${score}`;
}

resetButton.addEventListener('click', function(){
    score = 0;  
    scoreText.textContent= 'Total Score: 0';
    choiceText.textContent= 'Click to play!';
    yourSelection.textContent= 'You: No Selection';
    computerSelection.textContent= 'Computer: No Selection';
})

