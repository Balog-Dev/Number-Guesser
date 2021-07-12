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

        // Assign UI min and max
        minNum.textContent = min;
        maxNum.textContent = max;

        //  Listen for guesser
        guessBtn.addEventListener('click', function(){
            let guess = parseInt(guessInput.value);

            // Validate
            if(isNaN(guess) === NaN || guess < min || guess > max){
                setMessage(`please enter number between ${min} and ${max}`)

            }
        });

        // Set Message
        function setMessage(msg){
            message.style.color = 'red';
            message.textContent = msg;
        }

        