let score = JSON.parse(localStorage.getItem('score')) ||{
    wins: 0,
    losses: 0,
};

updateScoreElement();


function playGame(playerMove){
    const computerMove = pickComputerMove();

    let guess = '' ;
    if (playerMove === 'tail'){
        if(computerMove === 'head'){
        guess = 'You lose!.';
        }
        else if (computerMove === 'tail'){
            guess = 'You win!.';
        }
        
    } else if(playerMove === 'head'){
        if(computerMove ==='head'){
        guess = 'You win!.';
        }
        else if(computerMove ==='tail'){
            guess = 'You lose!.';
        }

    } 

    if (guess === 'You win!.') {
        score.wins = score.wins + 1;
    }
    else if(guess === 'You lose!.'){
        score.losses +=1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = guess;

    document.querySelector('.js-moves')
        .innerHTML = `You
<img src="Coin-side/${playerMove}.jpeg" class="move-icon">
<img src="Coin-side/${computerMove}.jpeg" class="move-icon">Computer`;


    // localStorage.setItem('score', JSON.stringify(score));

//                 alert( `You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}`);
}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;
}

function pickComputerMove () {
    const randomNumber = Math.random();

    let computerMove = '';

if(randomNumber >=0 && randomNumber < 1/2){
    computerMove = 'head';
}
else if (randomNumber >= 1/2 && randomNumber <1){
    computerMove = 'tail';
} 
return computerMove;
}