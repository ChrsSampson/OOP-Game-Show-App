/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//  Create phrase class
class Phrase{
    // this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        
    }

    // this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter
    addPhraseToDisplay(){
        //split phrase string into array of letters
        let phraseArray = Array.from(this.phrase)
        let phraseContainer = document.querySelector('#phrase > ul')
        //Clear the display from previous games
        phraseContainer.innerHTML = ``;
        //loop through array of letters
        phraseArray.forEach((letter) => {
            let item = ``
            //Check for space or letter
            if(letter == ' '){
                item = `<li class="space">${letter}</li>`
            }
            else{
                item = `<li class="letter">${letter}</li>`
            }
            phraseContainer.insertAdjacentHTML('beforeend', item);
        })
    }

    /** checks to see if the letter selected by the player matches a letter in the phrase.
    * @param {string} input user key press
    * @param {string} currentPhrase currently active random phrase
    * @param {bool} returns true or false
    */
    checkLetter(input, currentPhrase){
        //break down phrase into array
        let phraseArray = Array.from(currentPhrase);
        //check each letter in the array and return true if matches
        if(phraseArray.includes(input)){
            return true;
        }
        
    }

    /**  reveals the letter(s) on the board that matches the player's selection
     *   @param {string} key  correct user key press
     *   Disabled The key that was pressed so it cannot be pressed again  
     */
    showMatchedLetter(key){
        // show matched letter
        let letters = document.querySelectorAll('li[class="letter"]');
        letters.forEach((letter) => {
            if(letter.textContent == key){
                letter.classList.add('show');
            }
        })
    }

}


