



function Question(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}

Question.prototype.crctAns = function(choice) {
    return choice === this.answer;
}