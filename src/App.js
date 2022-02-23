import logo from './logo.svg';
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

  const history = {
    cards: {
      flop: "Ah7d8s",
      turn: "Ad",
      river: null
    },
    individuals: [
      {
        initials: "AC",
        pot: 600,
      },
      {
        initials: "GH",
        pot: 1600,
        hero: true
      },
      {
        initials: "RO",
        pot: 60,
      },
      {
        initials: "LP",
        pot: 39292929,
        current: true
      }
    ],
    actions: [
      {initials: "RO", action: "fold"}
    ]
  }
  return (
    <div className="App">
      <PokerTable history={history} hand={hand} />
    </div>
  );
}

export default App;
