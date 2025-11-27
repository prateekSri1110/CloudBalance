import { createStore } from "redux";
import rootReducer from "./rootReducer";

export const CloudBalanceStore = createStore(rootReducer);

CloudBalanceStore.subscribe(() => {
  console.log("Updated State : ", CloudBalanceStore.getState());
});
