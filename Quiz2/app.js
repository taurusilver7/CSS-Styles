
// A function to populate a question.

function populate() {
    if(quiz.isEnded()) {
        showScore();
    } else {
        // show question
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQstnIndex().text;

        // Show choices
        var choices = quiz.getQstnIndex().choice;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice-' + i);
            element.innerHTML = choices[i];
            guess('btn-' + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var crntqstnumber = quiz.qstnIndex + 1;
    var element = document.getElementById('progress');
    element.innerHTML = "Question " + crntqstnumber + " of " + quiz.qstn.length;

};

function showScore() {
    var gameOver = '<h1>Result</h1>';
    var gameOverHtml = "<h2 id='score'>Congratulations! Your score: " + quiz.score + "</h2>";
    var element = document.getElementById('quiz');
    element.innerHTML = gameOverHtml;

}

var questions = [
    new Question('Which one is not an object oriented programming language?', ['Java', 'C#', 'C++', 'C'], 'C'),
    new Question('Which language is used for styling webpages?', ['HTML', 'JQuery', 'CSS', 'XML'], 'CSS'),
    new Question('There are ______ main components of a object oriented programming?', ['1', '6', '2', '4'], '4'),
    new Question('Which language is used for web application?', ['PHP', 'Python', 'Javascript', 'All'], 'All'),
    new Question('MVC is a _____?', ['language', 'Framework', 'Library', 'All'], 'Framework')
];

var quiz = new Quiz(questions);

populate();

