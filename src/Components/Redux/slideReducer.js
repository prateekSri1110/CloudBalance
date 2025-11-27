export const slideReducer = (state = false, action) => {
  switch (action.type) {
    case "Slide":
      return !state;
    default:
      return state;
  }
};
