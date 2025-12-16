import { createStore } from "redux";

let parsedUser = null;
const storedUser = sessionStorage.getItem("userData");

try {
  parsedUser = storedUser ? JSON.parse(storedUser) : null;
} catch (error) {
  console.warn(
    "Invalid userData in sessionStorage:",
    error,
    " *** ",
    storedUser
  );
  parsedUser = null;
}

const initalState = {
  slide: false,
  isLoggedIn: sessionStorage.getItem("isLoggedIn") === "true",
  user: parsedUser,
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "Slide":
      return { ...state, slide: !state.slide };

    default:
      return state;
  }
}

export const CloudBalanceStore = createStore(reducer);

CloudBalanceStore.subscribe(() => {
  console.log("Updated State : ", CloudBalanceStore.getState());
});
