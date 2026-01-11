import { createStore } from "redux";

const initalState = {
  slide: false,
  isAuthenticated: false,
  user: { name: "", role: "" },
  account: { arn: "", accountName: "", accountId: "" },
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
        name: action.payload.name,
        role: action.payload.role,
      };

    case "ClearUserDetails":
      return {
        ...state,
        name: "",
        role: "",
      };

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
