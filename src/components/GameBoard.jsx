import { useState } from 'react';

// Initialize the gameboard as an array of arrays.
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// GameBoard component handles the rendering and interaction of the game board.
// onSelectSquare and activePlayerSymbol are passed as props to the GameBoard component.
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    /** Pass in rowIndex and colIndex to provide updated button coordinates
     * 
     * @param {*} colIndex 
     * @param {*} rowIndex 
     * Use that info to create and store an updated game board
     */

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            // Use spreaders to create a copies of the game board arrays so the original React
            // state is not mutated.
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]

            // Update the board with the current player's symbol using the button's coordinates.
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        });

        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>)}
        </ol>
    );

}