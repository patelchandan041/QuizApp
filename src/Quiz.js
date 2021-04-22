import React,{useState, useContext} from 'react'
import {Questions} from './QuestionBank'
import  { QuizContext } from './Contexts'
import './App.css'

function Quiz() {
  const { score, setScore, setGameState } =  useContext(QuizContext)

 const [currQuestion, setCurrQuestion ] = useState(0);
const [ optionChosen,setOptionChosen ] = useState("");

const nextQuestion = () => {
    if (Questions[currQuestion].asnwer === optionChosen) {
      setScore(score + 1);
      
    }
   
    setCurrQuestion(currQuestion + 1);
  };
  const finishQuizz = () =>{
    if (Questions[currQuestion].asnwer === optionChosen) {
        setScore(score + 1);
       
      }
     
      setGameState('endScreen')

  }

    return (
        <div className="Quiz"> 
           <h1>{Questions[currQuestion].prompt}</h1> 
           <div className="options">
               <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
               <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
               <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
               <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
           </div>
           {currQuestion ===  Questions.length - 1 ? (
               <button onClick={finishQuizz}>Finish quizz</button>
           ):(
            <button onClick={nextQuestion}>Next question</button>
           )}
           
        </div>
    )
}

export default Quiz
