/*import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import {useState} from 'react';
import {GameStateContext} from './helpers/Contexts';
// import Quiz from './components/Quiz';
// ['menu' 'playing' 'finished']
function App() {
  
  const[gameState, setGameState] = useState("menu");
  const[userName, setUserName  ] = useState("");
  return (
    <div className="App">
     
       <h1>Quiz app</h1>
       <GameStateContext.Proviider 
       value={{gameState, setGameState, userName, setUserName  }}
       >
       {gameState === "menu" && <Menu/>}
       {gameState === "playing" && <Quiz/>}
       </GameStateContext.Proviider>
  </div>
  );
}

export default App;*/
import "./App.css";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { useState } from "react";
import { GameStateContext } from "./helpers/Contexts";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
