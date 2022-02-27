import './App.css';
import PokerTable from "./PokerTable";
import HandHistory from './HandHistory';

function App() {
  const hand = new HandHistory({player: 'KB', cards: 'AdJh'})
    .sit('KB', 100)
    .sit('BA', 200)
    .sit('LA', 150)
    .bet('KB', 3)
    .bet('BA', 5)
    .fold('LA')
    .bet('KB', 2)
    .check('BA')
    .dealFlop('3d7h9c')
    .check('KB')
    .check('BA')
    .dealTurn('4d')
    .check('KB')
    .check('BA')
    .dealRiver('5c')
    .check('KB')
    .actionOn('BA');

  return (
    <div className="App">
      <PokerTable hand={hand} />
    </div>
  );
}

export default App;
