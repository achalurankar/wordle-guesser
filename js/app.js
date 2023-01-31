let combination = document.getElementById('combination')
function handleSubmit() {
    let word = document.getElementById('input').value
    let letters = document.getElementById('letters').value
    let useUnique = document.getElementById('unique').checked

    const worker = new Worker('processor.js')
    worker.postMessage([word, letters, useUnique, dictionary])
    combination.innerHTML = '<u>Combinations:</u>\n'
    worker.onmessage = (event) => {
        combination.innerHTML += `<li>${event.data}</li>\n`
    }
}

function populateAllLetters() {
    document.getElementById('letters').value = 'qwertyuiopasdfghjklzxcvbnm'
}