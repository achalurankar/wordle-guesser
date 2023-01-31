let dictionary = []
onmessage = (event) => {
    let args = event.data
    let word = removeSpaces(args[0])
    let letters = removeSpaces(args[1])
    let useUnique = args[2]
    dictionary = args[3]
    let requiredLength = getRequiredLength(word)
    process(word, letters, requiredLength, useUnique);
}

function removeSpaces(word) {
    let newWord = ''
    for(let index in word) {
        if(word[index] !== ' ')
            newWord += word[index]
    }
    return newWord
}

function process(word, letters, requiredLength, useUnique, currWord = "", usedIndices = []) {
    if(currWord.length >= requiredLength) {
        let populatedWord = populateWord(currWord, word);
        if(dictionary.includes(populatedWord))
            postMessage(populatedWord)
        return
    }
    for(let i in letters) {
        if(!usedIndices.includes(i)) {
            let letter = letters[i]
            process(word, letters, requiredLength, useUnique, currWord + letter, useUnique ? [...usedIndices, i] : [])
        }
    }
}

function getRequiredLength(word) {
    let length = 0
    for(let letter of word) {
        if(letter === '.') 
            length += 1
    }
    return length
}

function populateWord(currWord, word) {
    let generatedWord = ""
    let index = 0
    for(let letter of word) {
        if(letter === '.') {
            generatedWord += currWord[index++]
        } else {
            generatedWord += letter
        }
    }
    return generatedWord
}