import { createStore } from "redux";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const initalState = {
  slide: false,
  isAuthenticated: false,
  user: user,
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
