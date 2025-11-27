import { createStore } from "redux";

const initalState = {
  slide: false,
  isLoggedIn: false,
  user: { name: "Prateek Srivastava", email: "", password: "" },
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "Slide":
      return { ...state, slide: !state.slide };
    case "Login":
      return {
        ...state,
        isLoggedIn: !action.payload.isLoggedIn,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
}

export const CloudBalanceStore = createStore(reducer);

CloudBalanceStore.subscribe(() => {
  console.log("Updated State : ", CloudBalanceStore.getState());
});
