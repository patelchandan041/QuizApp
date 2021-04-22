import React,{ useContext} from 'react'
import {Questions} from './QuestionBank'
import  { QuizContext } from './Contexts'
import './App.css'

function Endscreen() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
      };

    return (
        <div className="EndScreen">
            <h1>Quiz finished</h1>
          <h3>{score}  /{Questions.length}</h3> 
          <button onClick={restartQuiz}>restart quiz</button>
        </div>
    )
}

export default Endscreen
