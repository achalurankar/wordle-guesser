export default class Processor {

    DELIMITER = "_"
    output = ""
    
    getCombinations(word, letters) {
        this.process(word, letters, this.getRequiredLength(word))
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
            // this.isWordValid(populatedWord)
            this.output += populatedWord + " "
            return
        }
        for(let letter of letters) {
            this.process(word, letters, requiredLength, currWord + letter)
        }
    }

    async isWordValid(word) {
        const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        const resCode = res.status;
        if(resCode !== 404){
            console.log(`${word} is valid`);
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