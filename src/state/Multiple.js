import React, { useState } from 'react'
const listofData = [
    {
        question: 'what is your Name',
        answer: 'rabin'
    },
    {
        question: 'what is your age',
        answer: '22'
    }
]
export default function Multiple() {
    const [userInput, setUserInput] = useState(null);
    const [questionIndex, setCurrentQuestionIndex] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        try {

            checkAnswer(userInput);
            setCurrentQuestionIndex(prev => prev + 1);
        } catch (err) {

        }


    }

    const handleChange = (e) => {
        const typedData = e.target.value;
        setUserInput(typedData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="name" onChange={handleChange} />
                <button> Submit</button>
            </form>
        </div>



    )
}


const checkAnswer = (userInput) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const answer = userInput.toLowerCase() ==

        }, 2000);
    })

}