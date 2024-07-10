import React from "react";

function GameOver({ winner, handleRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!!</h2>
      {winner && <p>{winner} Won the Match</p>}
      {!winner && <p>""its a draw""</p>}
      <p>
        <button onClick={handleRestart}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;
