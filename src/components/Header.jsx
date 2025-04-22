import Img from "../assets/quiz-logo.png"
import React from "react"

export default function Header(){
    return (
        <header>
            <img src={Img} alt="quizLogo" />
            <h1>React Quiz</h1>
        </header>
    )
}