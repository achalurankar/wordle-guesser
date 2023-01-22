import { useState } from 'react';
import Processor from '../Processor';

function Input(props){
    const[combinations, setCombinations] = useState('')

    function handleSubmit() {
        let word = document.getElementById('input').value
        let letters = document.getElementById('letters').value
        const processor = new Processor();
        processor.useUnique = document.getElementById('unique').checked
        let output = processor.getCombinations(word, letters)
        let combos = [<><u>Combinations:</u><br /></>]
        for(let combo of output) {
            combos.push(<li>{combo}</li>)
        }
        setCombinations(combos)
    }

    function populateAllLetters() {
        document.getElementById('letters').value = 'qwertyuiopasdfghjklzxcvbnm'
    }

    return (
        <>
            Enter Word:&nbsp;
            <input id="input"/>
            <br />
            <br />
            Enter Letters:&nbsp;
            <input id="letters"/> &nbsp; <button onClick={populateAllLetters}>All</button> 
            <br />
            <br />
            Unique? <input id='unique' type='checkbox' />
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br />
            <br />
            {combinations}
        </>
    )
}
  
export default Input;