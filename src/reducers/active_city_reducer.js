export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case "SELECTED_CITY":
      return action.payload;
    default:
      return state;
  }
}

