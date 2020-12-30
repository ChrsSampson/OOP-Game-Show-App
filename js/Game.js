/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrase = this.createPhrase();
        this.activePhrase = 'null';
    }

    //hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
    startGame(){

    }


    // Stores phrases
    createPhrase(){
        let phrases = [  new Phrase('pico bird likes seeds'),
                        new Phrase('blue bird is a chicken'),
                        new Phrase('wheels on the bus are square'),
                        new Phrase('show me the code'),
                        new Phrase('tiger striped lamborgini')];
        return phrases
    }
    
    //this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrase.length);
        let randomPhrase = this.phrase[randomIndex];
        console.info(randomPhrase);
        return randomPhrase;
    }

    //this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. 
    handleInteraction(){

    }

    // this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png
    removeLife(){

    }

    // this method checks to see if the player has revealed all of the letters in the active phrase.
    checkForWin(){

    }

    //this method displays the original start screen overlay, and depending on the outcome of the game
    gameOver(){
        
    }

}