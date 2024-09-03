let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.addEventListener('keydown', function(e) {

    if(e.key === 'Enter'){
        const guess= Number(document.querySelector('.guess').value);
        console.log(guess);

        // When there is no input
        if(!guess){
            // document.querySelector('.message').textContent = '⛔ No number!';

            displayMessage('⛔ No number!');

            // When player input incorrect number
        } else if (guess > 20) {
            // document.querySelector('.message').textContent = '⚠️ Out of range!';
            displayMessage('⚠️ Out of range!');

            // When the player wins
        } else if( guess === secretNumber){
            // document.querySelector('.message').textContent = '🎉 Correct Number!';
            displayMessage('🎉 Correct Number!');

            document.querySelector('.number').textContent = secretNumber

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').textContent = guess;

            document.querySelector('.number').style.width = '30rem';

            if( score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

            // When guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
                displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = '💥 You lost the game!';
                displayMessage('💥 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }  
        }  
    }
})

document.querySelector('.check').addEventListener('click', function() {
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if(!guess){
        // document.querySelector('.message').textContent = '⛔ No number!';

        displayMessage('⛔ No number!');

        // When player input incorrect number
    } else if (guess > 20) {
        // document.querySelector('.message').textContent = '⚠️ Out of range!';
        displayMessage('⚠️ Out of range!');

        // When the player wins
    } else if( guess === secretNumber){
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = guess;

        document.querySelector('.number').style.width = '30rem';

        if( score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }  
    }  
        // When guess is too high
    // } else if ( guess > secretNumber){
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
        
    //     // When guess is too low
    // } else if (guess < secretNumber){
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';



})
