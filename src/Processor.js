import { dictionary } from "./data/dictionary"

export default class Processor {

    DELIMITER = "."
    output = ""
    
    getCombinations(word, letters) {
        this.process(word.toLowerCase(), letters.toLowerCase(), this.getRequiredLength(word))
        return this.output.substring(0, this.output.length - 1).split(" ")
    }

    getRequiredLength(word) {
        let length = 0
        for(let letter of word) {
            if(letter === this.DELIMITER) 
                length += 1
        }
        return length
    }

    process(word, letters, requiredLength, currWord = "") {
        if(currWord.length >= requiredLength) {
            let populatedWord = this.populateWord(currWord, word);
            if(dictionary.includes(populatedWord))
                this.output += populatedWord + " "
            return
        }
        for(let letter of letters) {
            this.process(word, letters, requiredLength, currWord + letter)
        }
    }

    populateWord(currWord, word) {
        let generatedWord = ""
        let index = 0
        for(let letter of word) {
            if(letter === this.DELIMITER) {
                generatedWord += currWord[index++]
            } else {
                generatedWord += letter
            }
        }
        return generatedWord
    }
}