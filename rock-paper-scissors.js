const rockButton= document.querySelector('.rock');
const paperButton= document.querySelector('.paper');
const scissorsButton= document.querySelector('.scissors');
const scoreText= document.querySelector('.score');
const yourSelection= document.querySelector('#your-selection');
const computerSelection= document.querySelector('#computer-selection');
const resetButton= document.querySelector('#reset-button');
const playAgain= document.querySelector('#play-again');



rockButton.addEventListener('click',function(){
    yourSelection.textContent= 'You: Rock';
    computerSelection.textContent=`Computer: ${Math.floor((Math.random()*3) +1)}`;
   
})


paperButton.addEventListener('click',function(){
    yourSelection.textContent= 'You: Paper';
    computerSelection.textContent=`Computer: ${Math.floor((Math.random()*3) +1)}`;
})


scissorsButton.addEventListener('click',function(){
    yourSelection.textContent= 'You: Scissors';
    computerSelection.textContent=`Computer: ${Math.floor((Math.random()*3) +1)}`;
})

/*
resetButton.addEventListener('click',function(){
    scoreText.textContent='0';
    yourSelection.textContent= 'No Selection';
    computerSelection.textContent= 'No Selection';
})
*/

