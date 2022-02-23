import React from "react";
import Bet from "./Bet";

function summarizeActions(actions) { // promote this to a component eventually
  return actions.map(each => summarizeAction(each)).join(", ");
}

function summarizeAction(action) {
  switch (action.action) {
    case 'check': return 'x';
    case 'fold': return 'f';
    case 'bet': return action.amount.toString();
  }
}

export default function Player({name, hand}) {
  let classes = "Individual";
  if (hand.hasAction(name)) {
    classes += " current";
  }
  if (hand.isHero(name)) {
    classes += " hero";
  }
  if (hand.isFolded(name)) {
    classes += " folded";
  }
  return (
    <tr className={classes}>
      <td>{name}</td>
      <td>{hand.stack(name)}</td>
      <td>{summarizeActions(hand.preflopActions(name))}</td>
      <td>{summarizeActions(hand.flopActions(name))}</td>
      <td>{summarizeActions(hand.turnActions(name))}</td>
      <td>{summarizeActions(hand.riverActions(name))}</td>
    </tr>
  )
}