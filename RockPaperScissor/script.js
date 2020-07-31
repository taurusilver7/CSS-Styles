                                        // Challenge 1 --- Your age in days
// Year born in? Days from year from?

function ageIndays() {
    var birthYear = prompt('What year were you born in .. my good friend');
    var age = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are ' + age + ' days old.');
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageIndays').remove();
}

                                    // Challenge 2 Cat generator  //

                                    // Challenge-3 Rock Paper Scissors //

function rpsGame(choice) {
    console.log(choice);
    var choice1, choice2;
    choice1 = choice.id;
    choice2 = numberToChoice(randInt());
    console.log('Computer Choice:', choice2);
    
    result = decideWinner(choice1, choice2);    //(0,1) choice1 lost , choice2 won.
    console.log(result);

    message = finalMessage(result);       // You won, you tied or you lost. {'message': 'You win', 'color': 'green'}
    console.log(message);

    rpsFrontEnd(choice.id, choice2, message);      // message contains object with message and color of it 
}

function randInt() {
    return Math.floor(Math.random() * 3);       //bot choice for a random number b/w 0-3
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];       // takes in the number & gives the random bot choice.
}

// Comparisons between the choice1 and choice2 of total 9 different cases.

function decideWinner(choice1, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},            // a database for comparing the values of 
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},           // yourChoice and botChoice.
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
    }
    var yourScore = rpsDatabase[choice1][computerChoice];
    var computerScore = rpsDatabase[computerChoice][choice1];

    return [yourScore, computerScore];
}

// final display message to show whether the player won , tied or lost acc to the array of yourChoice & computerChoice

function finalMessage([yourScore, computerScore]) {
    if (yourScore == 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore == 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You win!', 'color': 'green'};
    }
}

// Front end logic to diplay msg, image, color.

function rpsFrontEnd(humanChoice, botChoice, finalMessage) {
    var imgDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

// Remove all the images after the choice is made.
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissor').remove();

var choice1div = document.createElement('div');
var botDiv = document.createElement('div');
var msgDiv = document.createElement('div');


choice1div.innerHTML = "<img src='" + imgDatabase[humanChoice] + "'height=150 width-120 style='box-shadow: 0px 10px 50px rgba(37,50, 233, 1);'>"   // the after image div of yourChoice
msgDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>" // the after text div of the game.
botDiv.innerHTML = "<img src='" + imgDatabase[botChoice] + "'height=150 width-140 style='box-shadow: 0px 10px 50px rgba(243,30, 24, 1);'>"  // the after image of the botChoice

document.getElementById('flex-box-rps-div').appendChild(choice1div);     //  appending the yourChoice image to the div
document.getElementById('flex-box-rps-div').appendChild(msgDiv);        // appending the message to the div
document.getElementById('flex-box-rps-div').appendChild(botDiv);        // appending the botChoice image to the div

}