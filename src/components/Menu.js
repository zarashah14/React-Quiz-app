/*import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  //const { gameState, setGameState, userName, setUserName  } = useContext(GameStateContext);
 const { setGameState , setUserName   } = useContext(GameStateContext);

  return (
    <div className="Menu">
      <label>Enter your name:</label>
      <input type="text" placeholder="Ex. john smith" onChange={(event) =>{
        setUserName(event.target.value)
       // gameState(event.target.value)
       // userName(event.target.value)
      }} />
      <button onClick={() => {
        setGameState("playing");
      }}>
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;*/

import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. John Smith"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;



