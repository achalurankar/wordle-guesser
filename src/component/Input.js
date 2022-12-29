import { useState } from 'react';
import Processor from '../Processor';

function Input(props){
    const[combinations, setCombinations] = useState('')

    function handleSubmit() {
        let word = document.getElementById('input').value
        let letters = document.getElementById('letters').value
        const processor = new Processor();
        let output = processor.getCombinations(word, letters)
        let combos = [<><u>Combinations:</u><br /></>]
        for(let combo of output) {
            combos.push(<li>{combo}</li>)
        }
        setCombinations(combos)
    }

    return (
        <>
            Enter Word:&nbsp;
            <input id="input"/>
            <br />
            <br />
            Enter Letters:&nbsp;
            <input id="letters"/>
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