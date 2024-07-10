import { useState } from "react";
import GameBorard from "./components/GameBorard";
import Player from "./components/player";
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./winning_combination";
import GameOver from "./components/GameOver";

function getActivePlayer(gameTurns) {
  let activePlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player == "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  function handlePlayername(symbol, newName) {
    setPlayers((prevState) => {
      return { ...prevState, [symbol]: newName };
    });
  }

  const [gameTurns, setGameTurns] = useState([]);

  const activeUser = getActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevState) => {
      let currentPlayer = getActivePlayer(prevState);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevState,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="one"
            symbol="X"
            isActive={activeUser === "X"}
            onChangePlayerName={handlePlayername}
          />
          <Player
            name="two"
            symbol="O"
            isActive={activeUser === "O"}
            onChangePlayerName={handlePlayername}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRestart={handleRestart} />
        )}
        <GameBorard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Logs logs={gameTurns} />
    </main>
  );
}

export default App;
