import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {

  const [activePlayer, setActivePlayer] = useState("X"); // State to track the active player. Default to "X"

  // Toggle active player between "X" and "O" follwing button click.
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        {/* Highlight the active player based on the current state */} 
        <ol id="players" className="highlight-player"> 
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        {/* Send handleSelectSquare function and active player symbol to the GameBoard component. */}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main >
  );
}

export default App
