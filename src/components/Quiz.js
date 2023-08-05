/*import "../App.css";
import {Question} from "../helpers/Questions";
import { useState } from "react";
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const choseOption =(option) =>{
    setOptionChosen(option)
    }
    return (
    <div className="Quiz">
     <h1>{Question[currentQuestion].prompt}</h1> 
     <div clasName="question">
        <button onClick={()=>{choseOption('optionA')}}> 
        {Question[currentQuestion].optionA} 
        </button>
        <button onClick={()=>{choseOption('optionB')}}> 
        {Question[currentQuestion].optionB} 
        </button>
        <button onClick={()=>{choseOption('optionC')}}> 
        {Question[currentQuestion].optionC} 
        </button>
        <button onClick={()=>{choseOption('optionD')}}> 
        {Question[currentQuestion].optionD} 
        </button>
     </div>
     {optionChosen}
     </div>
    );
}

export default Quiz;*/
import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].asnwer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("optionA");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            chooseOption("optionB");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            chooseOption("optionC");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            chooseOption("optionD");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;