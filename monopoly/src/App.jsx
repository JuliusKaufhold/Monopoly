import React from 'react'

// Hier können Sie die Spielfelder und ihre Eigenschaften definieren
const boardData = [
  { id: 0, name: 'Start', color: 'brown' },
  { id: 1, name: 'Mediterranean Ave', color: 'brown' },
  // ... Weitere Spielfelder ...
  { id: 39, name: 'Boardwalk', color: 'blue' },
];

// Komponente für ein Spielfeld
const BoardSquare = ({ name, color }) => (
  <div className={`board-square ${color}`}>
    {name}
  </div>
);

// Komponente für das Monopoly-Brett
const MonopolyBoard = () => (
  <div className="monopoly-board">
    {boardData.map((square) => (
      <BoardSquare key={square.id} name={square.name} color={square.color} />
    ))}
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>Monopoly Board</h1>
      <MonopolyBoard />
    </div>
  );
}

export default App;