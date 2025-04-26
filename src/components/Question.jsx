import React, { useState, useEffect } from 'react';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

export default function Question({ questionIndex, onSelectAnswer, onSkipAnswer }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: null,
        isCorrect: null,
    });

    useEffect(() => {
        // Reset the answer state when the question index changes
        setAnswer({
            selectedAnswer: null,
            isCorrect: null,
        });
    }, [questionIndex]);

    function handleSelectAnswer(selectedAnswer) {
        setAnswer({
            selectedAnswer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === selectedAnswer,
            });

            setTimeout(() => {
                onSelectAnswer(selectedAnswer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'incorrect';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                handleSelectAnswer={handleSelectAnswer}
            />
        </div>
    );
}