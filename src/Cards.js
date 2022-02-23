import React, {Fragment} from "react";

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