import React,{ useState } from 'react';
import MainMenu from './MainMenu'
import Quiz from './Quiz'
import Endscreen from './Endscreen'
import  { QuizContext } from './Contexts'


function App() {
  const [ gameState, setGameState] = useState("menu");
  const [ score,setScore] = useState(0)
  return (
    <div className="App">
     <h1>Quizz ap</h1>
     <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
     {gameState ==="menu" && <MainMenu />}
     {gameState ==="quiz" && <Quiz />}
     {gameState ==="endScreen" && <Endscreen />}
     </QuizContext.Provider>
    </div>
  );
}

export default App;
