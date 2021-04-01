'use strict';
/* 
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎺 Correct Answer'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = '13'
document.querySelector('.score').textContent = '10'


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// GAME STARTING

let number = Math.trunc(Math.random()*20)+1;
// console.log(number);
let score = 20;
document.querySelector('.score').textContent = score;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess , typeof guess);

    //not a number
    if(!guess){
        displayMessage('⛔️ No Number');

    //Wins
    }else if(number === guess) {
        displayMessage('🎉 Correct number');
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(document.querySelector('.highscore').textContent  <= document.querySelector('.score').textContent)
        document.querySelector('.highscore').textContent = score;
    }
    // guess is different
    else if(number !== guess){
        const str = number > guess ? '📉 Too Low' : '📈 Too High';
        if(score > 1){
            displayMessage(str);
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            displayMessage('💥 You lost the game.');
            document.querySelector('.score').textContent = 0;
        }
    }

    
})
document.querySelector('.again').addEventListener('click' , function(){
    score = 20;
    number = Math.trunc(Math.random()*20)+1;
    // console.log(number);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
});

//GAME COMPLETED

// refer the code for future referance
/* 
const x = function(){
    console.log(document.querySelector('.guess').value);

    // document.querySelector('.guess').value = Number(document.querySelector('.guess').value) +1;

    document.querySelector('.message').textContent = '🎺 Correct Answer'
};
document.querySelector('.check').addEventListener('click' , x);
*/
    /*
    // Too High
    else if(number < guess) {
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '💥 You lost the game.';
            document.querySelector('.score').textContent = 0;
        }
    }

    // Too Low
    else {
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = '💥 You lost the game.';
            document.querySelector('.score').textContent = 0;
        }
    }
    */