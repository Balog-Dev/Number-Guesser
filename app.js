/*
GAME FUNTION
- A player must guess between a min and max
-players get a certain amount of guesses
-Notify players of guesses remaining
-Nitify the player of the correct answer if loose
-Let player choose a play again
*/

// Game value
let min = 1,
    max = 10,
    winnindNum = 2,
    guessesLeft = 3;

    // UI Element
    const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');