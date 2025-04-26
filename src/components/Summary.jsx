import CompletedImg from "../assets/quiz-complete.png";
import React from "react";
import QUESTIONS from "../questions.js";
import { useState } from "react";

export default function Summary({ userAnswers, onRestart }) {

const skippedAnswers = userAnswers.filter((answer) => answer === null);
const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);

const skippedAnswersPercentage = Math.round((skippedAnswers.length / userAnswers.length) * 100)
const correctAnswersPercentage = Math.round((correctAnswers.length / userAnswers.length) * 100)
const incorrectAnswersPercentage = 100 - skippedAnswersPercentage - correctAnswersPercentage


return (
    <div id="summary">
            <img src={CompletedImg} alt="completed img" />
            <h2>Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersPercentage}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersPercentage}%</span>
                    <span className="text">asnwered correctly</span>
                </p>
                <p>
                    <span className="number">{incorrectAnswersPercentage}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((userAnswer, index) => {
                    let cssClass = "user-answer";

                    if(userAnswer === null) {
                        cssClass += " skipped";
                    } else if(userAnswer === QUESTIONS[index].answers[0]) {
                        cssClass += " correct";
                    } else {
                        cssClass += " incorrect";
                    }


                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className="user-answer">{userAnswer ?? 'skipped'}</p>
                        </li>
                    );
                }
                )}
            </ol>
    </div>


)


}