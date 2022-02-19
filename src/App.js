import logo from './logo.svg';
import './App.css';
import PokerTable from "./PokerTable";

function App() {
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
      <PokerTable history={history} />
    </div>
  );
}

export default App;
