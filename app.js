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
                setMessage(`please enter number between ${min} and ${max}`, 'red')
            }
            // check if you won
            if(guess === winnindNum){
                // Game over won

                // Display input
                guessInput.disabled = true;
                // Change border color
                guessInput.style.borderColor = 'green';
                // set message
                setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

            }else {
                // wrong number
                guessesLeft -= 1;

                if(guessesLeft === 0){
                    // Game over - lost
                    gameOver(false, `Game over, You lost. the correct
                    number was ${winnindNum}`);
                }else {
                    // Game continue answer wrong
                    setMessage(`${guess} is not correct, ${guessesLeft} guess left`, 'red');

                }
            }
        });

    // Game over
     function gameOver(won, msg){
     let color;
     won === true ? color = 'green' : color = 'red';  
            
    // Disable input
    guessInput.disabled = true;
     // Change Border color
     guessInput.style.color = color; 

     // // clear input
     guessInput.value = '';

                    
     // // Tell user its the wromg number

     guessInput.style.borderColor = 'red';
    //  set text color
        message.style.color = color;
      // Set Message
     setMessage(msg);
        
        }
        // Set Message
        function setMessage(msg, color){
            message.style.color = 'color';
            message.textContent = msg;
        }

        