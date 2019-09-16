/**
 * Create an object that stores individual 
 * letters in an array and has a function fordisplaying the letters as a single word
 */

//WordToLetters object constructor
class WordToLetters {
    constructor(word) {

        //create letter array
        let letterArray = [];
        let i;
        for (i = 0; i < word.length; i++) {
            letterArray.push(word[i])
        }

        //Save letter array in property
        this.letterArray = letterArray

        //Function to print letterArray as a single word
        this.printWord = function () {
            let word = ""

            let i;
            for (i = 0; i < this.letterArray.length; i++) {
                word += this.letterArray[i]
            }
            console.log(word)
        }

    }
}

//WordToLetters typical object
const Things = {
    letterArray: ["T", "h", "i", "n", "g", "s"],
    printWord: function () {
        let word = ""

        let i;
        for (i = 0; i < this.letterArray.length; i++) {
            word += this.letterArray[i]
        }
        console.log(word)
    }
}