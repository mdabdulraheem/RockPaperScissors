const game = () => {
    let pscore = 0;
    let cscore = 0;
    
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const intro = document.querySelector(".intro");
        const match = document.querySelector(".match");
        
        playBtn.addEventListener("click", () => {
            intro.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    
    const playMatch = () => {
        //Computers Option
        const compOptions = ['rock','paper','scissors'];
        
        //Users Option
        const userOptions = document.querySelectorAll(".options button");
        console.log(userOptions);
        
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });

        userOptions.forEach((option) =>{
            option.addEventListener('click',function() {
                //Updating Images
                playerHand = document.querySelector('.player-hand');
                compHand = document.querySelector('.computer-hand');

                playerHand.src = `./assets/rock.png`;
                compHand.src = `./assets/rock.png`;

                const randomNumber = Math.floor(Math.random()*3);
                const computerChoice = compOptions[randomNumber];
                console.log(computerChoice);
                
                setTimeout(()=> {
                    
                    //calling compareHands
                    compareHands(this.textContent,computerChoice);

                    playerHand.src = `./assets/${this.textContent}.png`;
                    compHand.src = `./assets/${computerChoice}.png`;

                    console.log(pscore,cscore);
                },2000);

                playerHand.style.animation = 'shakePlayer 2s ease'; 
                compHand.style.animation = 'shakeComputer 2s ease'; 
            });
        });
        
    };
    
    const compareHands = (playerChoice,computerChoice) => {
        const winner = document.querySelector('.winner');
        const psUpdate = document.querySelector('.player-score p');
        const csUpdate = document.querySelector('.computer-score p');
        
        if (playerChoice === computerChoice) {
            winner.textContent= 'Its a Tie';
            return;
        }
        
        if(playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pscore++;
                psUpdate.textContent = `${pscore}`;
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                cscore++;
                csUpdate.textContent = `${cscore}`;
                return;
            }
        }

        if(playerChoice === 'paper') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Player Wins';
                pscore++;
                psUpdate.textContent = `${pscore}`;
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                cscore++;
                csUpdate.textContent = `${cscore}`;
                return;
            }
        }

        if(playerChoice === 'scissors') {
            if(computerChoice === 'paper') {
                winner.textContent = 'Player Wins';
                pscore++;
                psUpdate.textContent = `${pscore}`;
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                cscore++;
                csUpdate.textContent = `${cscore}`;
                return;
            }
        }
    };
    
    playMatch();
    startGame();
};

game();