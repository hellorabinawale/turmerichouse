import React, { useState } from 'react';

const UseInput = ({ fomsubmiteed }) => {
    const [userInput, setUserinput] = useState('');
    const userInputchange = (e) => {
        setUserinput(e.target.value);

    }
    const userSubmit = (e) => {
        e.preventDefault();
        fomsubmiteed(userInput);
        setUserinput('');
    }
    return (
        <form onSubmit={userSubmit}>
            <input type="text" value={userInput} onChange={userInputchange} />
            <button>View Weather</button>
        </form>
    )
}
export default UseInput;