import React from "react";
import Bet from "./Bet";

function hasFolded(initials, actions) {
  return actions.some(action => action.action === 'fold' && action.initials === initials);
}

export default function Individual({individual, actions, seat}) {
  const {initials,pot, current, hero} = individual;
  let classes = "Individual";
  if (current) {
    classes += " current";
  }
  if (hero) {
    classes += " hero";
  }
  if (hasFolded(individual.initials, actions)) {
    classes += " folded";
  }
  return (
    <tr className={classes}>
      <td>{initials}</td>
      <td>{pot}</td>
      <Bet individual={individual} actions={actions}/>
    </tr>
  )
}