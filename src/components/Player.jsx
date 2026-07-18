import { useState } from 'react';

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing); /* Toggle the value usng a function to get latest state. Best practice. */
    }

    // function handleChange(event) {
    //     setPlayerName(event.target.value);
    // }

    return (
        <li>
            <span className="player">
                {isEditing ?
                    (<input type="text" required value={playerName} onChange={(e) => setPlayerName(e.target.value)} />) : (<span className="player-name">{playerName}</span>)
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}