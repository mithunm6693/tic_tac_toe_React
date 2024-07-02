import { useState } from "react";
import GameBorard from "./components/GameBorard";
import Player from "./components/player";

function App() {
  const [activeUser, setActiveUser] = useState("X");
  function handleSelectSquare() {
    setActiveUser((prevState) => (prevState === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="one" symbol="X" isActive={activeUser === "X"} />
          <Player name="two" symbol="O" isActive={activeUser === "O"} />
        </ol>
        <GameBorard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activeUser}
        />
      </div>
    </main>
  );
}

export default App;
