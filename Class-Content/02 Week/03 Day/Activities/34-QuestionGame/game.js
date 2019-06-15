var quizArray = [
    q1 = {
        question: 'Is Matt cool?',
        answer: 't'
    },
    q2 = {
        question: 'Is Kevin cool?',
        answer: 't'
    },
    q3 = {
        question: 'Is this class easy?',
        answer: 't'
    },
    q4 = {
        question: 'This one is true!',
        answer: 't'
    },
    q5 = {
        question: 'This is false!',
        answer: 't'
    },
    q6 = {
        question: 'Do you like sandwhiches?',
        answer: 't'
    },
    q7 = {
        question: 'Did you do your HW?',
        answer: 't'
    },
    q8 = {
        question: 'Is the sky black?',
        answer: 't'
    },
    q9 = {
        question: 'Is 2 greater than 4?',
        answer: 't'
    },
    q10 = {
        question: 'Is this the last question?',
        answer: 't'
    },
]
var count = 0;
var userPoints = 0;
var questionElement = document.getElementById('question');

function askQuestion(x) {
    // console.log(count);
    questionElement.textContent = quizArray[x].question;
}

function keyListener(e) {
    if (e.key !== 't' && e.key !== 'f') {
        count = 0;
        console.log('wrong input, you now have no points!');
    } else if (e.key === quizArray[count].answer) {
        userPoints++;
        // setTimeout(askQuestion(), 1000);
    } else if (e.key !== quizArray[count].answer) {
        console.log('false | try again');
        userPoints--;
    } 

    count++;
    document.getElementById('points').textContent = userPoints;

    if (count < quizArray.length) {
        askQuestion(count);
    } else {
        gameOver();
        return;
    }
}

function gameOver() {
    document.getElementById('question').textContent = 'GAME OVER LOSER!';
}

askQuestion(count);
document.addEventListener('keyup', keyListener);