export default function breedReducer(state = "", action) {
  if (action.type === "SET_BREED") {
    return action.payload;
    // if change the animals then the breed should be empty string
  } else if (action.type === "SET_ANIMAL") {
    return "";
  } else {
    return state;
  }
}
