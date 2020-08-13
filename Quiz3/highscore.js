


const highScoreList = document.querySelector('#highScoreList');

const highscores = JSON.parse(localStorage.getItem('highScore')) || [];

highScoreList.innerHTML = highscores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;

}).join('');