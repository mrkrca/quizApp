import { useState, useCallback } from "react"
import QUESTIONS from "../questions.js"
import React from "react";
import CompletedImg from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx";
import { use } from "react";

export default function Quiz(){


    const [asnwerStat, setAnswerState] = useState('')
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = asnwerStat === '' ? userAnswers.length : userAnswers.length - 1;
    const quizComplete = activeQuestionIndex === QUESTIONS.length


    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer){

        setAnswerState('asnwered')
        setUserAnswers((prevUsersAnswers)=> {
            return [...prevUsersAnswers, selectedAnswer];
        })
        setTimeout(()=> {
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct')
                console.log('correct');
                
            } else {
                setAnswerState('incorrect')
                console.log('incorrect');
            }
                setTimeout(()=> {
                    setAnswerState('')
                },2000)
        }, 1000);
    }, [])

    const handleSkipAnser = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

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
                <QuestionTimer timeout={5000} onTimeout={handleSkipAnser} key={activeQuestionIndex}/>
             <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
             <ul id="answers">
                {shuffleAnswers.map(answer => {
                    const isSelected = userAnswers[userAnswers.length - 1] === answer
                    let answerClass = ''
                   
                    if( asnwerStat === 'asnwered' && isSelected){
                       var cssClass = 'selected' 
                    }

                    if((asnwerStat === 'correct' || asnwerStat === 'incorrect') && isSelected){
                        cssClass = asnwerStat;
                    }

                    return( <li key={answer} className="answer">
                        <button onClick={()=> handleSelectAnswer(answer)} className={cssClass}>{answer}</button>
                    </li>
                    )
                }
                    
                )}
             </ul>
        </div>
     </div>
        )
}