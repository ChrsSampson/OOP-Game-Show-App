/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //Create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons
let game = "";

 //Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
document.getElementById('btn__reset').onclick = () => {
    // create new game
    game = new Game()
    // start the game
    game.startGame();
}


//Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object.
const keyboardKeys = document.querySelectorAll('button[class="key"]');
        keyboardKeys.forEach((key) => {
            key.onclick = (e) => {
                //call interation fucntion and pass in key value
                game.handleInteraction(e.target.textContent);
            }
        })