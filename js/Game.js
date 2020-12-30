/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrase = [
            new Phrase ('Pico Bird likes seeds'), 
            new Phrase ('Blue Bird is a chicken'),
            new Phrase ('Wheels on the bus are square'),
            new Phrase ('Show me the code'),
            new Phrase ('Tiger striped Lamborgini') 
            ];
        this.activePhrase = 'null';
    }

    //hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
    startGame(){
        console.log("New Game Start")
        //reset from last game
        this.reset();
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        const overlay = document.getElementById('overlay');
        overlay.style.display = "none";
        
    }
    
    //this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrase.length);
        this.activePhrase = this.phrase[randomIndex];
        console.info('active phrase', this.activePhrase);
    }

    //this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. 
    handleInteraction(keyPress){
        let keys = document.querySelectorAll('div[class="keyrow"] > button')
        let check  = this.activePhrase.checkLetter(keyPress, this.activePhrase.phrase);
        console.info('keypress', keyPress);
        // pass key press value and active phrase to check letter
        if(check){
            //disabled the key that was pressed
            keys.forEach((button) => {
                if(keyPress == button.textContent){
                button.classList.add('chosen');
                }
            })
            //pass in correct keepress as arg
            this.activePhrase.showMatchedLetter(keyPress);
        }
        else{
            // Disable the key that was pressed
            keys.forEach((button) => {
                if(keyPress == button.textContent){
                    button.classList.add('wrong');
                }
            })
            this.removeLife();
        }
        this.checkForWin();
        this.gameOver();
    }

    // this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png
    removeLife(){
        const heartContainer = document.querySelector('img[src="images/liveHeart.png"]');
        heartContainer.src = "../images/lostHeart.png";
        this.missed++
    }

    // this method checks to see if the player has revealed all of the letters in the active phrase.
    checkForWin(){
        const overlay = document.getElementById('overlay');
        const button = document.getElementById('btn__reset');
        const message = document.getElementById('game-over-message');
        let phraseLength = document.getElementsByClassName('letter');
        let correct = document.getElementsByClassName('show');
        let spaces = document.getElementsByClassName('space');
        //compare letters with show - spaces to total letters - spaces
        if(phraseLength.length == correct.length){
            message.textContent = "You Win";
            button.textContent = "Play Again?";
            overlay.classList.add('win');
            overlay.style.display = 'flex';
        }
    }

    //this method displays the original start screen overlay, and depending on the outcome of the game
    gameOver(){
        const overlay = document.getElementById('overlay');
        const button = document.getElementById('btn__reset');
        const message = document.getElementById('game-over-message');
        if(this.missed >= 5){
            message.textContent = "You Lose";
            button.textContent = "Try Again";
            overlay.classList.add('lose');
            overlay.style.display = 'flex';
        }
    }

    //reset life
    reset(){
        //reset score
        this.missed = 0;
        //reset hearts
        const heartContainers = document.querySelectorAll('img[src="../images/lostHeart.png"]');
        heartContainers.forEach((container) => {
            container.src = "images/liveHeart.png";
        });
        //reset key presses
        let keys = document.querySelectorAll('div[class="keyrow"] > button')
        keys.forEach((button) => {
            button.classList.remove('wrong');
            button.classList.remove('chosen');
        })
    }
}