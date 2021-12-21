'use strict';
let score=20
const secretNumber=Math.floor(Math.random()*20)+1
const randomNumberDiv=document.querySelector('.number')
const body=document.querySelector('body')
const inputValue=document.querySelector('.guess')
const highestScoreDiv=document.querySelector('.highscore')
let highestScore=0

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(inputValue.value)
   
    if(!guess){
        displayMessage('Please enter a number')
    }
   else if(guess===secretNumber){
      
       winning()
   }
   else if(guess!==secretNumber){
       const message=guess>secretNumber?'Too High':'Too Low'
        wrongGuess(message)
}
})
document.querySelector('.again').addEventListener('click',function(){
    restartGame()
})

function wrongGuess (message){
  if(score>1){
    score--
    displayMessage(message)
    setScore(score)
  }
  else{
      displayMessage('You lost the game')
      setScore(0)

  }
}
function restartGame(){
    score=20
    setScore(score)
    randomNumberDiv.textContent='?'
    randomNumberDiv.style.width='15rem'
    displayMessage('start guessing...')
    inputValue.value=''
    body.style.backgroundColor='#222'
}
function displayMessage(message){
    document.querySelector('.message').textContent=message
}
function setScore(score){
    document.querySelector('.score').textContent=score
}
function winning(){
    randomNumberDiv.textContent=secretNumber
    randomNumberDiv.style.width='30rem'
    displayMessage('You won!')
    body.style.backgroundColor='#60b347'
    if(score>highestScore){
        highestScore=score
        highestScoreDiv.textContent=highestScore
    }
}