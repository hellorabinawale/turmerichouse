import React, { useState } from 'react';

const quizData = [
    { question: 'Capital City of Nepal', answer: 'kathmandu' },
    { question: 'Capital City of France', answer: 'paris' },
    // Add more questions and answers here...
];

export default function Form() {
    const [answer, setAnswer] = useState('');
    const [userInput, setUserInput] = useState('');
    const [buttonDisable, setbuttonDisable] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question index

    const handletextarea = (e) => {
        const userInputs = e.target.value;
        userInputs.length !== 0 ? setbuttonDisable(false) : setbuttonDisable(true);
        setUserInput(userInputs);
    };

    const formSubmitted = async (e) => {
        e.preventDefault();
        try {
            await checkAnswer(userInput, currentQuestionIndex);
            setAnswer('correct');
            setError(false);
            setErrorMsg('');
            setUserInput('');
            setbuttonDisable(true);

            // Move on to the next question
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } catch (err) {
            setError(true);
            setErrorMsg(err.message);
            setUserInput('');
            setbuttonDisable(true);
        }
    };

    const currentQuestion = quizData[currentQuestionIndex];
    // Get the current question object

    if (answer === 'correct' && currentQuestionIndex < quizData.length) {
        // Show the next question if the answer is correct and there are more questions
        return (
            <div>
                <h2>City quiz</h2>
                <p>{currentQuestion.question}</p>
                <form onSubmit={formSubmitted}>
                    <textarea value={userInput} onChange={handletextarea}></textarea>
                    <button disabled={buttonDisable}>Submit</button>
                </form>
                {error && errorMsg}
            </div>
        );
    } else if (currentQuestionIndex >= quizData.length) {
        // Show a message when all questions are answered
        return <p>Congratulations! You've completed the quiz!</p>;
    } else {
        // Show the current question
        return (
            <div>
                <h2>City quiz</h2>
                <p>{currentQuestion.question}</p>
                <form onSubmit={formSubmitted}>
                    <textarea value={userInput} onChange={handletextarea}></textarea>
                    <button disabled={buttonDisable}>Submit</button>
                </form>
                {error && errorMsg}
            </div>
        );
    }
}

function checkAnswer(input, currentQuestionIndex) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const checkuserinput = input.toLowerCase() === quizData[currentQuestionIndex].answer;
            if (checkuserinput) {
                resolve();
            } else {
                reject(new Error('Good guess but a wrong answer. Try again!'));
            }
        }, 2000);
    });
}