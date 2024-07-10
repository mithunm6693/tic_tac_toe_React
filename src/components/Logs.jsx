import React from "react";

function Logs({ logs }) {
  return (
    <ol id="log">
      {logs.map((item) => (
        <li key={`${item.square.row}-${item.square.col}`}>
          {item.player} Selected {item.square.row},{item.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Logs;
