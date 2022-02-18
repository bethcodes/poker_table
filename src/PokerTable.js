import React from "react";
import Cards from "./Cards";
import Individual from "./Individual";

export default function PokerTable({history}) {
  const {cards, individuals} = history;
  return (
    <table className="PokerTable">
      <Cards cards={cards} />
      { individuals.map(individual => <Individual individual={individual} /> )}
    </table>
  );
}