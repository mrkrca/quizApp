import React from 'react'
import { useState, useEffect } from 'react'

export default function QuestionTimer({timeout, onTimeout}){
    const [timeLeft, setTimeLeft] = useState(timeout)



    useEffect(() => {
        console.log("setting timeout");
        
        setTimeout(timeout, onTimeout)
    }, [timeout, onTimeout])



    useEffect(() => {
        console.log("setting interval");
        
        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 10)
          
        }, 10)

        return () => clearInterval(interval)
    }, [])


 
    return (
    

      <>
        <progress id="question-time" max={timeout}  value={timeLeft}/>
      </>
    )

}