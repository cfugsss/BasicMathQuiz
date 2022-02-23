'use strict';

// setting variables to all componets needed

const gameScore = document.getElementById('score');
const mathQuestion = document.getElementById('math-ques');
const nextQuesButton = document.getElementById('next');
const newGameButton = document.getElementById('new');

const firstAnswerBut = document.getElementById('one');
const secondAnswerBut = document.getElementById('two');
const thirdAnswerBut = document.getElementById('three');

let score = 0;
let complete = true;

gameScore.classList.add('hidden');

//let choices = [choice1, choice2, choice3];

const mathArguement = [' ', '+', '-'];

function ternary(array) {
  if (array === 1) {
    return 1;
  } else {
    return -1;
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function clearAnswers() {
  firstAnswerBut.classList.remove('btn--correct');
  firstAnswerBut.classList.remove('btn--incorrect');
  secondAnswerBut.classList.remove('btn--correct');
  secondAnswerBut.classList.remove('btn--incorrect');
  thirdAnswerBut.classList.remove('btn--correct');
  thirdAnswerBut.classList.remove('btn--incorrect');
}

const restartGame = function () {
  window.location.reload();
};

nextQuesButton.addEventListener('click', function () {
  if (complete) {
    complete = false;
    clearAnswers();
    const numberQ1 = Math.trunc(Math.random() * 10) + 1;
    const numberQ2 = Math.trunc(Math.random() * 10) + 1;
    const mathSign = Math.trunc(Math.random() * 2) + 1;
    const answer = numberQ1 + numberQ2 * ternary(mathSign);
    let choice1 = answer;
    let choice2 = Math.trunc(Math.random() * answer) + 1;
    let choice3 = Math.trunc(Math.random() * answer) + 1;
    let choices = [choice1, choice2, choice3];
    shuffle(choices);
    console.log(choices);
    mathQuestion.innerHTML = `${numberQ1} ${mathArguement[mathSign]} ${numberQ2} = ?`;
    firstAnswerBut.innerHTML = `${choices[0]}`;
    secondAnswerBut.innerHTML = `${choices[1]}`;
    thirdAnswerBut.innerHTML = `${choices[2]}`;
    firstAnswerBut.addEventListener('click', function () {
      if (choices[0] === answer) {
        firstAnswerBut.classList.add('btn--correct');
        complete = true;
        setInterval(restartGame, 2000);
      } else {
        firstAnswerBut.classList.add('btn--incorrect');
        complete = false;
      }
    });
    secondAnswerBut.addEventListener('click', function () {
      if (choices[1] === answer) {
        secondAnswerBut.classList.add('btn--correct');
        complete = true;
        setInterval(restartGame, 2000);
      } else {
        secondAnswerBut.classList.add('btn--incorrect');
        complete = false;
      }
    });
    thirdAnswerBut.addEventListener('click', function () {
      if (choices[2] === answer) {
        thirdAnswerBut.classList.add('btn--correct');
        complete = true;
        setInterval(restartGame, 2000);
      } else {
        thirdAnswerBut.classList.add('btn--incorrect');
        complete = false;
      }
    });
  } else {
    window.alert('Please finish the question!');
  }
});

newGameButton.addEventListener('click', function () {
  restartGame();
  btn.click(document.getElementById('next'));
});

/*

if (choices[0] === answer) {
        firstAnswerBut.classList.add('button--correct');
      } else {
        firstAnswerBut.classList.add('btn--incorrect');
      }

*/
