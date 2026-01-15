import { createStore } from "redux";

const initalState = {
  slide: false,
  isAuthenticated: false,
  user: { name: "", emailId: "", role: "" },
  allAccounts: [],
  accountId: "",
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "Slide":
      return { ...state, slide: !state.slide };

    case "authenticated":
      return { ...state, isAuthenticated: !state.isAuthenticated };

    case "UserDetails":
      return {
        ...state,
        user: action.payload,
      };

    case "ClearUserDetails":
      return {
        ...state,
        user: { name: "", role: "", emailId: "", accounts: "" },
      };

    case "loadAccounts":
      return { ...state, accounts: action.payload };

    case "allAccounts":
      return { ...state, allAccounts: action.payload };

    case "LOGOUT":
      return { ...initalState };

    case "setAccountId":
      return { ...state, accountId: action.payload };

    default:
      return state;
  }
}

export const CloudBalanceStore = createStore(reducer);

CloudBalanceStore.subscribe(() => {
  console.log("Updated State : ", CloudBalanceStore.getState());
});
