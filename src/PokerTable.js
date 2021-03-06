import React from "react";
import Cards from "./Cards";
import Player from "./Player";

export default function PokerTable({history, hand}) {
  return (
    <table className="PokerTable">
      <thead className="Labels">
        <tr>
          <th></th>
          <th>Pot</th>
          <th>Pre</th>
          <th>Flop</th>
          <th>Turn</th>
          <th>River</th>
        </tr>
      </thead>
      <thead>
        <Cards hand={hand} />
      </thead>
      <tbody>
        { hand.players().map(each => <Player key={each} name={each} hand={hand}/> )}
      </tbody>
    </table>
  );
}