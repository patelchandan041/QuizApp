import React,{  useContext } from 'react'
import  { QuizContext } from './Contexts'
import './App.css'

function MainMenu() {
    const { setGameState } = useContext(QuizContext)
    return (
        <div className="menu">
            <button onClick={() => {
              setGameState('quiz')
            }}
            >start quiz</button>
            
        </div>
    )
}

export default MainMenu
