
/*
1. All the scores of the Quiz programs are stored here.
2. The Number of question in total the quiz program stored for the app are stored here. */

function Quiz(qstn) {
    this.score = 0;
    this.qstn = qstn;
    this.qstnIndex = 0;
};

// A function to get the index of current question.

Quiz.prototype.getQstnIndex = function() {
    return this.qstn[this.qstnIndex];
};

// A function to check if the quiz has ended or not.

Quiz.prototype.isEnded = function() {
    return this.qstn.length === this.qstnIndex;
};

// A guess function to check whether the user chooice is the correct answer.

Quiz.prototype.guess = function(answer) {
    if(this.getQstnIndex().crctAns(answer)) {
        this.score++;
    }
    this.qstnIndex++;
};