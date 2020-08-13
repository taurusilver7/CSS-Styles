const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQstn = {};
let acceptAns = true;
let score = 0;
let qstnCounter = 0;
let availQstns = [];


let questions = [
    {
        question: 'What is ((2 + 27) * 15 - 421) * 2?',
        choice1: '30',
        choice2: '78',
        choice3: '28',
        choice4: '112',
        answer: '3',
    },
    {
        question: 'The tallest building in the world is located in which city?',
        choice1: 'Dubai',
        choice2: 'New York',
        choice3: 'shanghai',
        choice4: 'None',
        answer: '1',
    },
    {
        question: 'What percent of the american adults believe that chocolate milk comes from brown cow?',
        choice1: '20%',
        choice2: '18%',
        choice3: '7%',
        choice4: '25%',
        answer: '3',
    },
    {
        question: 'Approximately what percent of U.S. power outrages are caused by squirrels?',
        choice1: '10-20%',
        choice2: '5-10%',
        choice3: '15-20%',
        choice4: '30-40%',
        answer: '1',
    },
];

const scorePoints = 100;
const maxQstns = 4;

function startGame() {
    qstnCounter = 0;
    score = 0;
    availQstns = [...questions]; // spread operator to get all values from questions array
    getNextQstn();
}

function getNextQstn() {
    if (availQstns.length === 0 || qstnCounter > maxQstns) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html'); // Keeps track of the score.
    }
    qstnCounter++; // qstn counter count ++
    progressText.innerText = `Question ${qstnCounter} of ${maxQstns}`;  // this is like qstn 1 of 4, 3 of 4 like.
    progressBarFull.style.width = `${(qstnCounter/maxQstns) * 100}%`;

    const qstnIndex = Math.floor(Math.random() * availQstns.length); // get a random qstn number to attach a random queston to it.
    currentQstn = availQstns[qstnIndex]; // choosing a random question.
    question.innerText = currentQstn.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQstn['choice' + number];
    })

    availQstns.splice(qstnIndex, 1);
    acceptAns = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptAns) return

        acceptAns = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQstn.answer ? 'correct' : 'incorrect';

        /*let classToApply = function() {
            if(selectedAnswer === currentQstn.answer) {
                return 'correct';
            } else {
                return 'incorrect';
            }
        };*/

        if(classToApply === 'correct') {
            incrementScore(scorePoints);
        };

        selectedChoice.parentElement.classList.add(classToApply);
        console.log(selectedChoice.parentElement.classList);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
        console.log(selectedChoice.parentElement.classList);

            getNextQstn();
        });
    });
}, 1000)

incrementScore = num => {
    score += num;
    scoreText.innerText = score
};



startGame();



















