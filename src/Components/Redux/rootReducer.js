import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";
import { slideReducer } from "./slideReducer";

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  slide: slideReducer,
});

export default rootReducer;
