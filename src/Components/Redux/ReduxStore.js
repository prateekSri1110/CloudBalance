import { createStore } from "redux";

const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const initalState = {
  slide: false,
  isAuthenticated: false,
  user: user,
  account: { arn: "", accountName: "", accountId: "" },
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "Slide":
      return { ...state, slide: !state.slide };

    case "addAccountData":
      return {
        ...state,
        arn: action.payload.arn,
        accountName: action.payload.accountName,
        accountId: action.payload.accountId,
      };
    case "clearAccount":
      return {
        ...state,
        arn: "",
        accountName: "",
        accountId: "",
      };
    default:
      return state;
  }
}

export const CloudBalanceStore = createStore(reducer);

CloudBalanceStore.subscribe(() => {
  console.log("Updated State : ", CloudBalanceStore.getState());
});
