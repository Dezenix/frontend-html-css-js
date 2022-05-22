// declaring variables in global scope so all functions will have access to these
var scores, roundScore, activePlayer, gamePlaying, prevDice1, prevDice2, inputScore;

init();

// addEventListener registers a single event listener on a single target. 2 args: 1. the event type e.g. click. 2. the function to be called when the event happens. note: you can use anonymous function as argument instead of external function like btn() on line 7 e.g. function() {}
function btn() {
  if (gamePlaying) {
    // 1. random number
    // Math.floor removes the decimals
    // Math.random gives a random number between 0 and 1. We multiply that by 6 to get random number between 0 - 5. We add 1 to get random number between 1 - 6.
    // where:
    // 1 is the start number
    // 6 is the number of possible results
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    //2. display result: unhiding the dice after 'rolling' it
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    // changing the dice image src
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    // 3. update the round score IF the rolled number is NOT a 1 && if didn't roll double 6 twice
    if (prevDice1 === 6 && prevDice2 === 6 && dice1 === 6 && dice2 === 6) {
      scores[activePlayer] = 0;
      // update UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      nextPlayer();
    } else if (dice1 !== 1 && dice2 !== 1) {
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // next player
      nextPlayer();
    }

    prevDice1 = dice1;
    prevDice2 = dice2;

  }

}
document.querySelector('.btn-roll').addEventListener('click', btn);
// 2nd arg (function) we don't need to add () because we're not calling it, the event listener will call the function for us. This is known as callback function; a function that is not called by us, but by another function. The function that is pass into another function as an argument and this function (addEventListener method) will then call that function for us
// https://developer.mozilla.org/en-US/docs/Web/Events



// button hold - hold the score and change active player
document.querySelector('.btn-hold').addEventListener('click', function() { // anonymous function
  if (gamePlaying) {
    // Add current score to global score
    // score[0] is player0; score[1] is player1. We're adding activePlayer's round score to their global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // checking for user input for new score goal
    inputScore = document.getElementById('input-score').value;
    // debugging
    // console.log(inputScore);

    // check if user had input a score to win
    // if undefined, 0, null, "", JS coerced to FALSE. Anything else is coerced to TRUE
    if (!inputScore) {
      inputScore = 100;
    }

    // Check if player won the game
    if (scores[activePlayer] >= inputScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      // Next player if there's no winner
      nextPlayer();
    }
  }

});


function nextPlayer() {
  // this switches the activePlayer from 0 to/fro 1
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0; // that round's score needs to be set back to 0
  prevDice1 = prevDice2 = 0;

  // hiding the dice image on next player's turn
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  // when a player rolls a 1, they should lose that current score
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  // changing the active player 'display dot' in the class name (ionic framework icons)
  // classList.toggle() adds class if argument is present in class of HTML element; it removes class if argument is not present in class of HTML element
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  // another way of doing it:
  // document.querySelector('.player-0-panel').classList.remove('active'); // we pass in the name of the class we want to remove to remove()
  // document.querySelector('.player-1-panel').classList.add('active');
};


// new game button
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  // reset scores to 0
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0; // 0 is first player, 1 is second player
  gamePlaying = true;

  // we want to change the style to display:none because when the user first opens the webpage, the dice should not be visible
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  // getElementById only works for ids but is faster than querySelector. Unlike querySelector, it doesn't need '#' for id because it know it's an id already
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // resetting player names from 'winner'
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  // resetting class list to default (without 'winner')
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  // resetting activePlayer to player0
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');

};





// other notes

// querySelector lets us select stuff exactly the way we do it in CSS. The only difference is that it selects the first element it finds
// like CSS to select ids, we use #
// textContent: gets or sets the text content of a node and its descendants. textContent can only set plain text, no HTML
// document.querySelector('#current-0').textContent = dice;

// innerHTML lets us add html elements. (this is example of above line)
// document.querySelector('#current-0').innerHTML = '<em>' + dice + '</em>';

// getter: we get a value
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
