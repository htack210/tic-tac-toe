// Initialize the gameboard as an array of arrays.
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// GameBoard component handles the rendering and interaction of the game board.
// onSelectSquare and activePlayerSymbol are passed as props to the GameBoard component.
export default function GameBoard({onSelectSquare}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         // Get a deep copy of the previous game board to avoid mutating state directly.
    //         // The spreaders create a copy of each array to ensure immutability.
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={onSelectSquare}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>)}
        </ol>
    );

}