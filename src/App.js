import './App.css';
import PokerTable from "./PokerTable";
import HandHistory from './HandHistory';

function App() {
  const hand = new HandHistory('KB', 'AdJh');
  hand.addStack('KB', 100);
  hand.addStack('BA', 200);
  hand.addStack('LA', 150);
  hand.addBet('KB', 3);
  hand.addBet('BA', 5);
  hand.fold('LA');
  hand.addBet('KB', 2);
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
