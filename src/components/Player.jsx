import { useState } from "react";

function Player({ name, symbol, isActive, onChangePlayerName }) {
  const [newName, setNewName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      onChangePlayerName(symbol, newName);
    }
  }

  function onInputChange(event) {
    setNewName(event.target.value);
  }

  let playerName = isEditing ? (
    <input
      type="text"
      value={newName}
      required
      onChange={onInputChange}
    ></input>
  ) : (
    <span className="player-name">{newName}</span>
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
