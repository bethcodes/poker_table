import React from "react";

// Rename to Board?
export default function Cards({hand}) {
  return (
    <tr className="Cards">
      <th/>
      <th>{hand.pot()}</th>
      <th>{hand.cards()}</th>
      <th>{hand.flop()}</th>
      <th>{hand.turn()}</th>
      <th>{hand.river()}</th>
    </tr>
  )
}