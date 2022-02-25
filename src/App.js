import './App.css';
import PokerTable from "./PokerTable";
import HandHistory from './HandHistory';

function App() {
  const hand = new HandHistory('KB', 'AdJh');
  hand.sit('KB', 100);
  hand.sit('BA', 200);
  hand.sit('LA', 150);
  hand.bet('KB', 3);
  hand.bet('BA', 5);
  hand.fold('LA');
  hand.bet('KB', 2);
  hand.check('BA');
  hand.dealFlop('3d7h9c');
  hand.check('KB');
  hand.check('BA');
  hand.dealTurn('4d');
  hand.check('KB');
  hand.check('BA');
  hand.dealRiver('5c');
  hand.check('KB')
  hand.actionOn('BA');

  return (
    <div className="App">
      <PokerTable hand={hand} />
    </div>
  );
}

export default App;
