import React, { useRef } from 'react';
import QUESTIONS from '../questions.js';



export default function Answers({answers, selectedAnswer, answerState, handleSelectAnswer }){

const shuffleAnswers = useRef();


 if(!shuffleAnswers.current){
        shuffleAnswers.current = [...answers]
        shuffleAnswers.current.sort(()=> Math.random() -0.5)
    }
    




    return (


        <ul id="answers">
        {shuffleAnswers.current.map(answer => {
            const isSelected = selectedAnswer === answer;
            let answerClass = ''
           
            if (answerState === 'answered' && isSelected) {
               var cssClass = 'selected';
            }


            if((answerState === 'correct' || answerState === 'incorrect') && isSelected){
                cssClass = answerState;
            }

            return( <li key={answer} className="answer">
                <button
    disabled={answerState !== ''}
    onClick={() => handleSelectAnswer(answer)}
    className={cssClass}
>
    {answer}
</button>
            </li>
            )
        }
            
        )}
     </ul>
    )



}