import { useState } from "react"
import QUESTIONS from "../questions.js"
import React from "react";
import CompletedImg from "../assets/quiz-complete.png"
export default function Quiz(){

    
    const [userAnswers, setUserAnswers] = useState([])




    const activeQuestionIndex = userAnswers.length;
    

    const quizComplete = activeQuestionIndex === QUESTIONS.length


    function handleSelectAnswer(selectedAnswer){
        setUserAnswers((prevUsersAnswers)=> {
            return [...prevUsersAnswers, selectedAnswer];
        })
    }


    if (quizComplete){
        return (
            <div id="summary">
                <img src={CompletedImg} alt="completed img" />
                <h2>Completed</h2>
            </div>
        )
    }

    const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffleAnswers.sort(()=> Math.random() -0.5)

    return (

     <div id="quiz">
           <div id="question">
             <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
             <ul id="answers">
                {shuffleAnswers.map(answer => (
                    <li key={answer} className="answer">
                        <button onClick={()=> handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                ))}
             </ul>
        </div>
     </div>
        )
}