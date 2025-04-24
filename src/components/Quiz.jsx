import { useState, useCallback, useRef } from "react"
import QUESTIONS from "../questions.js"
import React from "react";
import CompletedImg from "../assets/quiz-complete.png"
import Question from "./Question.jsx";


export default function Quiz(){


    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex =  userAnswers.length ;
    const quizComplete = activeQuestionIndex === QUESTIONS.length
    

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUsersAnswers) => {
            return [...prevUsersAnswers, selectedAnswer];
        });
      
    }, []);

    const handleSkipAnser = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
    if (quizComplete){
        return (
            <div id="summary">
                <img src={CompletedImg} alt="completed img" />
                <h2>Completed</h2>
            </div>
        )
    }

   

    return (

     <div id="quiz">
          {activeQuestionIndex < QUESTIONS.length && (
            <Question
            key={activeQuestionIndex}
            questionIndex={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}   
            onSkipAnswer={handleSkipAnser}
          
            />
          )}
     </div>
        )
}