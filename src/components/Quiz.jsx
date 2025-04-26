import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import React from "react";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";



export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        // Update the userAnswers state directly
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    }

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizComplete) {
        return (
            <Summary
                userAnswers={userAnswers}
                onRestart={() => setUserAnswers([])}
            />
        );
    }

    return (
        <div id="quiz">
            {activeQuestionIndex < QUESTIONS.length && (
                <Question
                    key={activeQuestionIndex}
                    questionIndex={activeQuestionIndex}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer}
                />
            )}
        </div>
    );
}