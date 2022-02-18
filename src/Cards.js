import React, {Fragment} from "react";

export default function Cards({cards}) {
  const {flop, turn, river} = cards;
  return (
    <tr className="Cards">
      <th />
      <th>{flop}</th>
      <th>{turn}</th>
      <th>{river}</th>
    </tr>
  )
}