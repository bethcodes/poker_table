function parseAction(action) {
  switch (action.action) {
    case "check":
      return "x";
    case "fold":
      return "";
    default:
      return action.bet;
  }
}

export default function parseActions(initials, actions) {
  return actions.filter(action => action.initials === initials).map(action => parseAction(action))
};