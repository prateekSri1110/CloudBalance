const count = 1;

export const countReducer = (state = count, action) => {
  switch (action.type) {
    case "Increment":
      return state.count + 1;
    case "Decrement":
      return state.count - 1;
    case "Reset":
      return 1;
    default:
      return state;
  }
};
