import React from "react";
import Cards from "./Cards";
import Individual from "./Individual";

export default function PokerTable({history}) {
  const {cards, individuals, actions} = history;
  return (
    <table className="PokerTable">
      <thead className="Labels">
        <th/>
        <th>Pot</th>
        <th>Pre</th>
        <th>Flop</th>
        <th>Turn</th>
        <th>River</th>
      </thead>
      <thead>
        <Cards cards={cards} />
      </thead>
      <tbody>
        { individuals.map((individual, i) => <Individual seat={i}  key={individual.initials} individual={individual} actions={actions} /> )}
      </tbody>
    </table>
  );
}