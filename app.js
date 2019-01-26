/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes, each result is added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that it's the next player turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game.
 */

var scores, roundScore, activePlayer, gamePlaying;
init();



document.querySelector('.btn-roll').addEventListener('click',function () {

    //this way is called anonymous function
    if (gamePlaying) {
        //1. we need a random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //3/ update the round score if the rolled number was NOT a 1
        if(dice !== 1) {  //difference operator
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            /*
           activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            //This is ternary operator
            roundScore = 0;

            document.getElementById('current-0').textContent = '0'; //setting the current-0 to 0
            document.getElementById('current-1').textContent = '0'; //setting the current-1 to 0

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
            */
            nextPlayer();

        }

    }


});

document.querySelector('.btn-hold').addEventListener('click',function(){
    // type of event is the first arg and function will be the second event
    if (gamePlaying) {
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //Check if the player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else{
            //Next player
            nextPlayer();
        }

    }

});

function nextPlayer() {
    //Nex player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //This is ternary operator
    roundScore = 0;

    document.getElementById('current-0').textContent = '0'; //setting the current-0 to 0
    document.getElementById('current-1').textContent = '0'; //setting the current-1 to 0

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none'; //applying css using js
//here we hide the dice from the game
//we can also use getElementById instead of query selector which is way more faster that query selector

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}







//document.querySelector('#current-' + activePlayer).textContent = dice; //setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
//var x = document.querySelector('#score-0').textContent; //getter
//console.log(x);


